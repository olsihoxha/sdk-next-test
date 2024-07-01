import { FC, TargetedEvent, useState } from 'preact/compat';
import Checkbox from '../Checkbox';
import Title from '../../../components/common/component/Title';
import { Styles } from '../../../types';
import { ENUM_FILTER_KEYS, IFilterValue } from '@liquidcommercedev/sdk';

export interface CheckboxGroupProps {
  groupName?: string;
  items?: IFilterValue[];
  checkedItems?: string[];
  showSeeAll?: boolean;
  onCheckboxChange: (
    groupName: ENUM_FILTER_KEYS | string,
    item: IFilterValue,
    checked: boolean,
  ) => void;
  styles?: Styles;
  current?: string;
  selectedValues?: { [key: string]: boolean };
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  groupName,
  items,
  showSeeAll,
  onCheckboxChange,
  selectedValues,
}: CheckboxGroupProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [checkedState, setCheckedState] = useState({});
  const [showAll, setShowAll] = useState(false);

  const checkboxes = items?.map((item) => {
    const id = item.value;
    return {
      id,
      checked: !!(selectedValues && selectedValues[id]), // controlled state of checkboxes in filter component (parent component)
      label: item.value,
      onChange: (event: TargetedEvent<HTMLInputElement>) => {
        const checked = (event.target as HTMLInputElement).checked;
        onCheckboxChange(groupName, item, checked);
      },
    };
  });

  return (
    <div className="w-full flex flex-col flex-start gap-3 self-stretch font-['Open Sans']">
      <div>
        <Title
          textClassName="text-light-font-color font-['Open Sans'] !text-sm !font-bold leading-5" //remove font-extrabold
          title={groupName}
        />
      </div>
      <div className="flex flex-col gap-5">
        {checkboxes?.slice(0, showAll ? checkboxes.length : 3).map(({ id, label, onChange }) => (
          <Checkbox
            key={id}
            id={id}
            checked={checkedState[id]} //controlled state of checkboxes in checkboxGroup component
            label={label}
            onChange={onChange}
            checkboxSize="3.5"
            labelTextSize="xs"
            labelColor="light-font-color"
            labelWeight="normal"
          />
        ))}
        {showSeeAll && checkboxes?.length > 3 && (
          <span
            className="text-sm font-normal text-primary-font cursor-pointer"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'See Less' : 'See All'}
          </span>
        )}
      </div>
    </div>
  );
};

export default CheckboxGroup;
