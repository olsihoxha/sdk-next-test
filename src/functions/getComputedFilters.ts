import { checkboxSignal, initialCheckboxState } from '@/signals/catalog.signals';

export type ComputedFiltersType = {
  key: string;
  values: any[];
}[];

export const getComputedFilters = (): ComputedFiltersType => {
  const initialFilterValue = initialCheckboxState.value;
  const checkboxValue = checkboxSignal.value;
  initialFilterValue.forEach((filter) => {
    if (filter.key === checkboxValue.bucket?.toLowerCase()) {
      if (checkboxValue.checked === true) {
        filter.values.push({ ...checkboxValue.id });
      } else {
        filter.values = filter.values.filter((item) => {
          return item.value !== checkboxValue.id.value;
        });
      }
    }
  });
  return initialFilterValue;
};
