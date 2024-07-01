import { useState, FC } from 'preact/compat';
import DoubleRangeSlider from '../../../atoms/forms/DoubleRangeSlider';
import CheckboxGroup from '../../../atoms/forms/CheckboxGroup';
import Header from './Header';
import { Styles } from '../../../types';
import { IFilterSchema, IFilterValue } from '@liquidcommercedev/sdk';
import { getCheckboxSignal, getPriceSignal } from '@/signals';
import { debounce } from 'lodash';

export interface FilterProps {
  filter?: FilterItems[] | IFilterSchema[] | Promise<void | IFilterSchema[] | IFilterSchema[]>;
  handleFilterSubmit?: () => void;
  styles?: Styles;
}

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

export interface FilterItem {
  count: number;
  value: string;
  checked?: boolean;
}

export interface FilterItems {
  [bucket: string]: FilterItem[];
}

const Filter: FC<FilterProps> = ({ filter, handleFilterSubmit }: FilterProps) => {
  const [checkedState, setCheckedState] = useState<IFilterValue[]>([]);
  const [pricefilter, setPriceFilter] = useState<{ values: { min: number; max: number } }>({
    values: { min: 0, max: 500000 },
  });
  const [reset, setReset] = useState(false);

  const handleCheckboxChange = (
    bucket: ENUM_FILTER_KEYS | string,
    id: IFilterValue,
    checked: boolean,
  ) => {
    setCheckedState((prevState) => ({
      ...prevState,
      id: checked,
    }));
    getCheckboxSignal({ bucket, id, checked });
  };

  const handleSliderChange = (name: string, value: number) => {
    setPriceFilter((prevValues) =>
      name === 'from'
        ? { values: { min: Number(value), max: prevValues.values.max } }
        : { values: { min: prevValues.values.min, max: Number(value) } },
    );
    getPriceSignal(pricefilter.values);
  };

  const onReset = () => {
    setReset(!reset);
    setCheckedState([]);
    setPriceFilter({ values: { min: 0, max: 500 } });
  };

  return (
    <form>
      {
        <div className="sm:hidden">
          <Header onReset={onReset} onSubmit={handleFilterSubmit} />
        </div>
      }
      <div className="w-full flex flex-col flex-start gap-10 self-stretch py-10 sm:pt-0">
        {(filter as IFilterSchema[])?.map((filter: IFilterSchema) => (
          <CheckboxGroup
            key={filter.bucket}
            groupName={filter.bucket.charAt(0).toUpperCase() + filter.bucket.slice(1)}
            items={filter.values}
            showSeeAll={true}
            onCheckboxChange={handleCheckboxChange}
            selectedValues={checkedState[filter.bucket]}
          />
        ))}
        <DoubleRangeSlider
          key={reset}
          title="Price"
          min={0}
          max={500000}
          onChange={debounce(handleSliderChange, 300)}
          value={pricefilter.values}
        />
      </div>
    </form>
  );
};

export default Filter;
