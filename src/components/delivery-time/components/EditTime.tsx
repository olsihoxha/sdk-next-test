import { useState } from 'preact/hooks';
import { useStyles } from '../../common/context/ThemeContext/ThemeContext';
import Button from '../../common/ui/Button/Button';
import { EditTimeProps } from './interfaces';
import DatePicker from '../../common/component/DatePicker';
import CalendarIcon from '../../../assets/icons/CalendarIcon';
import Dropdown from '../../common/component/Dropdown';
import ArrowDown from '../../../assets/icons/ArrowDown';

const EditTime = ({
  setEditMode,
  scheduledDelivery,
  setScheduledDelivery,
  sx = '',
}: EditTimeProps) => {
  const styles = useStyles();

  const timesSelect: string[] = [
    '9am - 11am',
    '10am - 12am',
    '11am - 1pm',
    '12pm - 2pm',
    '1pm - 3pm',
    '2pm - 4pm',
    '3pm - 5pm',
    '4pm - 6pm',
  ];

  const [selectedDate, setSelectedDate] = useState(scheduledDelivery?.date);
  const [selectedTime, setSelectedTime] = useState(scheduledDelivery?.timeRange || timesSelect[0]);
  const [isDateValid, setIsDateValid] = useState(true);

  const getRangeDate = (shiftDays: number) => {
    const today = new Date();
    const shiftedDate = new Date(today);
    shiftedDate.setDate(today.getDate() + shiftDays);
    const year = shiftedDate.getFullYear();
    const month = String(shiftedDate.getMonth() + 1).padStart(2, '0');
    const day = String(shiftedDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const minDate = getRangeDate(0);
  const maxDate = getRangeDate(5);

  const handleSave = () => {
    setScheduledDelivery({
      date: selectedDate,
      timeRange: selectedTime,
    });

    setEditMode(false);
  };

  const handleCancel = () => {
    setScheduledDelivery(undefined);
    setEditMode(false);
  };

  return (
    <div
      className={`!sm:py-4 !sm:px-6 flex flex-col gap-4 rounded-lg p-[15px] ${sx}`}
      style={{
        fontFamily: styles.text.headings.font,
        backgroundColor: styles.colors.bg.secondary,
        color: '#333333',
      }}
    >
      <div className="font-bold flex flex-row justify-between items-center">
        <div className="sm:text-lg text-base">Schedule Delivery</div>
      </div>

      <div className="flex gap-x-4">
        <div className="relative flex items-center w-full">
          <DatePicker
            icon={<CalendarIcon />}
            minDate={minDate}
            maxDate={maxDate}
            setDateVal={setSelectedDate}
            setIsDateValid={setIsDateValid}
            inputSx="py-[7px] !rounded-lg pr-4 pl-10 sm:py-3"
            dateVal={scheduledDelivery?.date || minDate}
            alignRight={false}
          />
        </div>

        <div className="flex items-center w-full">
          <div className="w-full">
            <Dropdown
              items={timesSelect}
              icon={<ArrowDown />}
              scrollable={false}
              onSelect={(option) => setSelectedTime(option)}
              sx="bg-white !w-full rounded-xl"
            >
              <input
                value={selectedTime}
                type="text"
                readOnly
                className="block w-full border rounded-lg sm:px-2.5 sm:py-3 bg-white text-gray-500
                 outline-none placeholder:text-sm sm:text-sm cursor-pointer px-4 py-[7px] text-xs"
              />
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3" style={styles.fonts.family}>
        <Button
          onClick={handleSave}
          variant="solid"
          className="rounded-lg !bg-primary sm:text-base text-sm !sm:py-[13px] !py-[10px] !h-10 !sm:h-12"
          disabled={!isDateValid}
        >
          Save
        </Button>

        <Button
          onClick={handleCancel}
          variant="plain"
          className="!text-primary rounded-lg sm:text-base text-sm !sm:py-[13px] !py-[10px] !h-10 !sm:h-12 !font-normal"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default EditTime;
