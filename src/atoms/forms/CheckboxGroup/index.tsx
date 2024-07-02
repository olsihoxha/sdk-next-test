import { FC } from 'preact/compat';
import Element, { CheckboxGroupProps } from './CheckboxGroup';
import ThemeProvider from '../../../components/common/context/ThemeContext/ThemeProvider';

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  items,
  groupName,
  onCheckboxChange,
  checkedItems,
  showSeeAll,
  styles,
}: CheckboxGroupProps) => {
  return (
    <ThemeProvider styles={styles}>
      <Element
        items={items}
        groupName={groupName}
        onCheckboxChange={onCheckboxChange}
        checkedItems={checkedItems}
        showSeeAll={showSeeAll}
      />
    </ThemeProvider>
  );
};


export default CheckboxGroup;
