/* eslint-disable @typescript-eslint/no-unused-vars*/
import Element, { DatePickerProps } from './Datepicker';
import { FC } from 'preact/compat';

import CalendarIcon from '../../../assets/icons/CalendarIcon';

export const DatePicker: FC<DatePickerProps> = ({
  icon,
  minDate,
  maxDate,
  setDateVal,
  dateVal,
  placeholder,
  setIsDateValid,
  inputSx,
  alignRight,
}) => {
  const getRangeDate = (shiftDays: number) => {
    const today = new Date();
    const shiftedDate = new Date(today);
    shiftedDate.setDate(today.getDate() + shiftDays);
    const year = shiftedDate.getFullYear();
    const month = String(shiftedDate.getMonth() + 1).padStart(2, '0');
    const day = String(shiftedDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const minDatee = getRangeDate(0);
  const maxDatee = getRangeDate(5);
  return (
    <Element
      // icon={icon}
      icon={<CalendarIcon />}
      minDate={minDatee}
      maxDate={maxDatee}
      setDateVal={setDateVal}
      dateVal={dateVal}
      placeholder={placeholder}
      setIsDateValid={setIsDateValid}
      inputSx="py-[7px] !rounded-lg pr-4 pl-10 sm:py-3"
    />
  );
};



export default DatePicker;
