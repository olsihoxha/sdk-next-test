import { useState, useEffect } from 'preact/hooks';

interface DatePickerProps {
  icon: any;
  dateVal: string | undefined;
  minDate: string;
  maxDate: string;
  setDateVal: any;
  placeholder?: string;
  setIsDateValid: any;
  inputSx?: string;
  alignRight?: boolean;
}

const DatePicker = ({
  icon,
  minDate,
  maxDate,
  setDateVal,
  dateVal,
  placeholder,
  setIsDateValid,
  inputSx,
  alignRight = true,
}: DatePickerProps) => {
  const [value, setValue] = useState<string | undefined>(dateVal);
  const [selectedDate, setSelectedDate] = useState<string | undefined>(dateVal);

  function convertDate(inputDate: string): string {
    const d = inputDate.split('-');
    return `${d[1]}/${d[2]}/${d[0]}`;
  }

  const formatValue = (inDate: string) => {
    let formattedDate = '';

    const input = `${inDate}`.replace(/\D/g, '').substring(0, 8);
    const month = input.substring(0, 2);
    const day = input.substring(2, 4);
    const year = input.substring(4, 8);

    if (input.length > 4) {
      formattedDate = `${month}/${day}/${year}`;
    } else if (input.length > 2) {
      formattedDate = `${month}/${day}`;
    } else if (input.length > 0) {
      formattedDate = `${month}`;
    } else {
      formattedDate = '';
    }

    return formattedDate;
  };

  function validateDate(input: string) {
    const dateRegex =
      /^02\/(?:[01]\d|2\d)\/(?:19|20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:19|20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:19|20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:19|20)\d{2}$/;
    if (!dateRegex.test(input)) {
      setSelectedDate('');
      setIsDateValid(false);
      return;
    }
    const inputDate = new Date(input);
    inputDate.setHours(0, 0, 0, 0);
    const minDateObj = new Date(minDate);
    minDateObj.setHours(0, 0, 0, 0);
    const maxDateObj = new Date(maxDate);
    maxDateObj.setHours(0, 0, 0, 0);
    if (inputDate < minDateObj || inputDate > maxDateObj) {
      setIsDateValid(false);
      return;
    }
    const year = inputDate.getFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const day = inputDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    setSelectedDate(formattedDate);
    setIsDateValid(true);
  }

  useEffect(() => {
    if (selectedDate) {
      const dateStr = convertDate(selectedDate);
      setValue(dateStr);
      setDateVal(selectedDate);
    }
    setIsDateValid(!!selectedDate);
  }, [selectedDate, setDateVal, setIsDateValid]);

  return (
    <div className="w-full">
      <style>
        {`
          input::-webkit-calendar-picker-indicator {
            cursor: pointer;
          }
        `}
      </style>
      <div className="relative w-full">
        <input
          value={value ?? ''}
          placeholder={placeholder ?? 'MM/DD/YYYY'}
          className={`block w-full rounded-xl border bg-white text-gray-500
           focus:outline-none placeholder:text-sm sm:text-sm text-xs ${inputSx}`}
          type="text"
          onFocus={(event) => validateDate(event.currentTarget.value)}
          onInput={(event) => {
            const newValue = formatValue(event.currentTarget.value);
            if (newValue !== event.currentTarget.value) {
              event.currentTarget.value = newValue;
            }
            setValue(newValue);
            validateDate(newValue);
          }}
        />
        <div
          className={`flex items-center justify-center absolute ${alignRight ? 'right-0' : 'left-0 !px-4'} top-0 bottom-0 px-2 cursor-pointer`}
        >
          <input
            value={selectedDate}
            type="date"
            min={minDate}
            max={maxDate}
            className="absolute z-10 w-full h-full opacity-0 cursor-pointer"
            onChange={(e) => {
              if (!e.currentTarget.value) setValue('');
              setSelectedDate(e.currentTarget.value);
            }}
          />
          {icon}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
