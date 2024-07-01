import ArrowDropDown from '../../../../../assets/icons/ArrowDropDown';
import ArrowDropUp from '../../../../../assets/icons/ArrowDropUp';
import { ComponentChildren } from 'preact';

interface ExpansiveRowProps {
  backgroundSecondaryColor: string;
  title: string;
  titleValue: string;
  children: ComponentChildren;
  isOpen: boolean;
  toggleIsOpen: () => void;
}

function ExpansiveRow({
  title,
  backgroundSecondaryColor,
  titleValue,
  toggleIsOpen,
  isOpen,
  children,
}: ExpansiveRowProps) {
  return (
    <div className="flex flex-col gap-2">
      <button onClick={toggleIsOpen} className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-1">
          <span>{title}</span>
          {isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
        </div>
        <div>{titleValue}</div>
      </button>

      {isOpen && (
        <div
          className="rounded-xl p-2 flex flex-col gap-2"
          style={{ backgroundColor: backgroundSecondaryColor }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default ExpansiveRow;
