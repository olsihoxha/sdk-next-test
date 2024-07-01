import { FC, useCallback, useEffect, useState } from 'preact/compat';
import { LiquidPLPProps } from '../../../build-types';
import Filter from '../../filter';
import Cards from './Cards';
import { useAppContext } from '../../common/context/AppContext/hooks/useAppContext';
import { ICategoryFilter, IFilter, IFilterSchema, IPriceFilter } from '@liquidcommercedev/sdk';
import {
  checkboxSignal,
  checkboxesCount,
  priceRangeSignal,
  searchSignal,
  brandSignal,
  categorySignal,
  useCatalogParams,
} from '@/signals/catalog.signals';
import { getComputedFilters } from '@/functions';
import AdjustmentsVerticalIcon from '@/assets/icons/AdjustmentVerticalIcon';
import Breadcrumb from '../../breadcrumb';

const ProductListPage: FC<LiquidPLPProps> = ({
  catalogParams,
  onCardClick,
  breadcrumbCurrent,
  breadcrumbCatPaths,
}: LiquidPLPProps) => {
  enum ENUM_FILTER_KEYS {
    BRANDS = 'brands',
    FLAVOR = 'flavor',
    REGION = 'region',
    VARIETY = 'variety',
    PRICE = 'price',
    AVAILABILITY = 'availability',
    CATEGORIES = 'categories',
    SIZES = 'sizes',
    COLORS = 'colors',
    APPELLATION = 'appellation',
    COUNTRY = 'country',
    VINTAGE = 'vintage',
    MATERIALS = 'materials',
  }

  const [products, setProducts] = useState<any[]>([]);
  const [searchTitle, setSearchTitle] = useState<string | null>(null);
  const [initialStateProducts, setInitialStateProducts] = useState<any[]>([]);
  const [catalogFilter, setCatalogFilter] = useState<IFilterSchema[]>([]);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const { getCatalog } = useAppContext();
  const { catalogParams: catalogParamsSignal } = useCatalogParams();

  useEffect(() => {
    const searchFor =
      catalogParamsSignal?.search ||
      [...new Set(catalogParamsSignal?.filters?.find((obj) => obj.key === 'brands')?.values)]?.join(
        ', ',
      ) ||
      [
        ...new Set(
          catalogParamsSignal?.filters
            ?.find((obj) => obj.key === 'categories')
            ?.values?.map((value) => value?.split(' > ')?.slice(-1)?.[0]),
        ),
      ]?.join(', ') ||
      '';
    if (searchFor) {
      setSearchTitle(searchFor);
    } else {
      setSearchTitle('');
    }
  }, [catalogParamsSignal]);

  const filterResponse = useCallback(async () => {
    try {
      const catalog = await getCatalog(catalogParams);
      setProducts(catalog.products);
      setInitialStateProducts(catalog.products);

      //catalogFilters
      const filteredFilters: IFilterSchema[] = [];
      const priceFilterExists = catalog.navigation.filters.some(
        (filter: IFilterSchema) => filter.bucket === ENUM_FILTER_KEYS.PRICE,
      );
      if (!priceFilterExists) {
        const priceFilter: IPriceFilter = {
          key: ENUM_FILTER_KEYS.PRICE,
          values: priceRangeSignal.value.values,
        };
        catalog.navigation.filters.push(priceFilter as any); //adjust types!
      }
      catalog.navigation.filters.forEach((filter: IFilterSchema) => {
        if (
          filter.bucket === ENUM_FILTER_KEYS.PRICE ||
          filter.bucket === ENUM_FILTER_KEYS.CATEGORIES ||
          filter.bucket === ENUM_FILTER_KEYS.SIZES ||
          filter.bucket === ENUM_FILTER_KEYS.BRANDS
        ) {
          filteredFilters.push(filter);
        } else {
          return;
        }
      });
      setCatalogFilter(filteredFilters);
      return catalog;
    } catch (error) {
      console.error('Error fetching catalog', error);
    }
  }, [ENUM_FILTER_KEYS, catalogParams, getCatalog]);

  //get initial products and filters from catalog api on search or filters change
  useEffect(() => {
    filterResponse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //update search param when searchSignal changes
  useEffect(() => {
    catalogParams.search = searchSignal.value;
  }, [catalogParams]);

  useEffect(() => {
    const brandFilterIndex = catalogParams.filters.findIndex(
      (filter) => filter.key === ENUM_FILTER_KEYS.BRANDS,
    );
    const newBrandFilter: IFilter = {
      key: ENUM_FILTER_KEYS.BRANDS,
      values: [brandSignal.value],
    };
    if (brandFilterIndex !== -1) {
      catalogParams.filters[brandFilterIndex] = newBrandFilter;
    } else {
      catalogParams.filters.push(newBrandFilter);
    }
  }, [ENUM_FILTER_KEYS.BRANDS, catalogParams.filters]);

  useEffect(() => {
    const categoryFilterIndex = catalogParams.filters.findIndex(
      (filter) => filter.key === ENUM_FILTER_KEYS.CATEGORIES,
    );
    const newCategoryFilter: ICategoryFilter = {
      key: ENUM_FILTER_KEYS.CATEGORIES,
      values: [categorySignal.value],
    };
    if (categoryFilterIndex !== -1) {
      catalogParams.filters[categoryFilterIndex] = newCategoryFilter;
    } else {
      catalogParams.filters.push(newCategoryFilter);
    }

    catalogParams.search = categorySignal.value;
  }, [ENUM_FILTER_KEYS.CATEGORIES, catalogParams]);

  //update price filter when priceRangeSignal changes
  useEffect(() => {
    const priceFilterIndex = catalogParams.filters.findIndex(
      (filter) => filter.key === ENUM_FILTER_KEYS.PRICE,
    );
    const newPriceFilter: IPriceFilter = {
      key: ENUM_FILTER_KEYS.PRICE,
      values: priceRangeSignal.value.values,
    };

    if (priceFilterIndex !== -1) {
      catalogParams.filters[priceFilterIndex] = newPriceFilter;
    } else {
      catalogParams.filters.push(newPriceFilter);
    }
    try {
      filterResponse();
    } catch (error) {
      console.error('Error fetching products from catalog', error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceRangeSignal.value]);

  //update products when checkboxes signal changes
  useEffect(() => {
    if (checkboxSignal.value)
      // set new filters to catalogParams
      catalogParams.filters = getComputedFilters().map((fil) => {
        return {
          key: fil.key,
          values: fil.values.map((val) => {
            return val.value;
          }),
        };
      });
    if (checkboxesCount.value === 0) {
      setProducts(initialStateProducts);
    } else {
      filterResponse();
    }
  }, [catalogParams, initialStateProducts, filterResponse]);

  return (
    <>
      {showMobileFilter && (
        <div className="block sm:hidden bg-white fixed z-50 w-screen min-h-screen max-h-screen p-4 left-0 top-0 overflow-y-scroll">
          <Filter filter={catalogFilter} handleFilterSubmit={() => setShowMobileFilter(false)} />
        </div>
      )}
      <div className="flex sm:hidden justify-between items-center w-full text-blue-700 my-4">
        <Breadcrumb
          current={breadcrumbCurrent}
          items={[...(breadcrumbCatPaths ? breadcrumbCatPaths : [])]}
        />
        <button className="flex text-primary" onClick={() => setShowMobileFilter(true)}>
          Refine
          <AdjustmentsVerticalIcon />
        </button>
      </div>
      <div className="w-full h-full flex flex-col flex-wrap sm:gap-4 max-w-[1488px]">
        <div className="flex h-full w-full gap-6 sm:p-[15px] md:p-6">
          {/* Filter */}
          <div className="hidden sm:block md:flex flex-col w-1/6 gap-8">
            <Filter filter={catalogFilter} />
            <div className="h-[320px]">
              <img className="w-full h-[320px]" />
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full flex flex-col gap-4">
            {searchTitle && (
              <h2 className="text-lg font-bold md:text-2xl text-light-font-color">{searchTitle}</h2>
            )}
            {!searchTitle && products && products.length && (
              <h2 className="text-lg font-bold md:text-2xl text-light-font-color">
                {products[0].subType}
              </h2>
            )}
            <Cards products={products} onClick={onCardClick} />
            <div />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
