import { ICatalogParams, IFilterValue, LiquidTaxonomy } from '@liquidcommercedev/sdk';
import { computed, signal } from '@preact/signals';

export const checkboxSignal = signal<{
  bucket: ENUM_FILTER_KEYS | string;
  id: IFilterValue;
  checked: boolean;
}>({
  bucket: '',
  id: undefined,
  checked: false,
});
export const priceRangeSignal = signal<{ values: { min: number; max: number } }>({
  values: { min: null, max: null },
});
export const brandSignal = signal<string>('');
export const categorySignal = signal<LiquidTaxonomy>(null);
export const searchSignal = signal<string>('');
export const catalogParamsSignal = signal<string>('{}');

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

export const initialCheckboxState = signal([
  { key: 'brands', values: [] },
  { key: 'categories', values: [] },
  { key: 'sizes', values: [] },
]);

export const checkboxesCount = signal(0);

export function getCheckboxSignal(checkbox: {
  bucket: ENUM_FILTER_KEYS | string;
  id: IFilterValue;
  checked: boolean;
}) {
  checkboxSignal.value = checkbox;
  checkbox.checked ? checkboxesCount.value++ : checkboxesCount.value--;
  return checkboxSignal.value;
}

export const computedFilters = computed(() => {
  const initialFilterValue = initialCheckboxState.value;
  const checkboxValue = checkboxSignal.value;
  initialFilterValue.forEach((filter) => {
    if (filter.key === checkboxValue.bucket?.toLowerCase()) {
      if (checkboxValue.checked === true) {
        filter.values = [{ ...checkboxValue.id }];
      } else {
        filter.values = filter.values.filter((item) => {
          return item.value !== checkboxValue.id.value;
        });
      }
    }
  });
  return initialFilterValue;
});

export function useCatalogParams() {
  return {
    catalogParams: JSON.parse(catalogParamsSignal?.value),
    setCatalogParams: (params: ICatalogParams) => {
      if (params) {
        catalogParamsSignal.value = JSON.stringify(params);
      }
    },
  };
}

export function getPriceSignal(values: { min: number; max: number }) {
  priceRangeSignal.value = { values };
  return priceRangeSignal.value;
}

export function getBrandValue(label: string) {
  brandSignal.value = label;
  return brandSignal.value;
}

export function getCategoryValue(label: LiquidTaxonomy) {
  categorySignal.value = label;
  return categorySignal.value;
}

export function getSearchValue(search: string) {
  searchSignal.value = search;
  return searchSignal.value;
}
