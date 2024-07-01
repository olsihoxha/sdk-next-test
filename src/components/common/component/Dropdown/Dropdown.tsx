import { FC, ReactNode, useCallback, useEffect, useMemo, useState } from 'preact/compat';
import { MagnifyingGlassSolid } from '@liquidcommerceteam/preact-heroicons';
import ArrowDropDown from '../../../../assets/icons/ArrowDropDown';

export interface DropdownProps {
  items: string[];
  emptyPlaceholder?: string | undefined;
  onToggle?: (e: boolean) => boolean | undefined;
  onSelect?: (option: string) => unknown | undefined;
  sx?: string | undefined;
  scrollable?: boolean;
  children?: ReactNode;
  filterEnabled?: boolean;
  icon?: ReactNode;
}

const Dropdown: FC<DropdownProps> = ({
  items = [],
  filterEnabled = false,
  scrollable = true,
  onToggle,
  onSelect,
  sx,
  children,
  icon,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filteredItems, setFilteredItems] = useState(items);
  const [searchValue, setSearchValue] = useState('');

  const handleOptionClick = useCallback(
    (option: string) => {
      if (onSelect) {
        onSelect(option);
      }
      setInternalIsOpen(false);
    },
    [onSelect],
  );

  useEffect(() => {
    setFilteredItems(
      items.filter((item) => item.toLowerCase().includes(searchValue?.toLowerCase())),
    );
  }, [items, searchValue]);

  const renderItems = useMemo(() => {
    const renderedItems = filteredItems.map((item, index) => (
      <li key={`${index}-${item}`} onClick={() => handleOptionClick(item)}>
        <span className="whitespace-nowrap cursor-pointer font-medium">{item}</span>
      </li>
    ));
    return (
      <>
        <div className="p-3">
          {filterEnabled && (
            <div className="pb-3">
              <div className="bg-gray-50 flex flex-row justify-start items-center gap-2.5 py-2 px-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 w-full">
                <MagnifyingGlassSolid className="w-4 h-4 shrink-0" />
                <input
                  name="search"
                  placeholder="Search"
                  className="bg-transparent w-full focus:outline-none"
                  value={searchValue}
                  onInput={(event) => {
                    setSearchValue(event.currentTarget.value);
                  }}
                />
              </div>
            </div>
          )}
          <ul
            className={`${scrollable ? 'max-h-[270px] ' : '!h-fit'} custom-dropdown pr-2 text-left text-sm text-gray-900 flex flex-col gap-4 min-w-[139px] overflow-auto overflow-x-hidden`}
          >
            {renderedItems}
          </ul>
        </div>
      </>
    );
  }, [filterEnabled, filteredItems, handleOptionClick, scrollable, searchValue]);

  const handleToggle = () => {
    setSearchValue('');
    setInternalIsOpen(!internalIsOpen);
    if (onToggle) {
      onToggle(!internalIsOpen);
    }
  };

  const handleBlur = (event) => {
    if (event.relatedTarget === null) {
      setInternalIsOpen(false);
      if (onToggle) {
        onToggle(false);
      }
    }
  };

  return (
    <div className={`w-fit relative ${sx}`} tabIndex={0} onBlur={handleBlur}>
      <style>
        {`
          .custom-dropdown::-webkit-scrollbar {
            width: 4px;
          }

          .custom-dropdown::-webkit-scrollbar-thumb {
            background-color: #6B7280;
            border-radius: 3px;
          }
          
          .custom-dropdown::-webkit-scrollbar-track {
            background-color: transparent;
          }
        `}
      </style>
      <div onClick={handleToggle} className="flex flex-row gap-2 items-center">
        {children}
        {icon ? (
          <div
            className={`absolute right-0 transition-all cursor-pointer ${
              internalIsOpen ? 'rotate-180' : ''
            }`}
          >
            {icon}
          </div>
        ) : (
          <ArrowDropDown
            className={`w-6 h-6 transition-all ${internalIsOpen ? 'rotate-180' : ''}`}
          />
        )}
      </div>
      <div
        className={`w-fit right-0 absolute transition-all mt-1 z-10 bg-white rounded-lg shadow
          ${internalIsOpen ? 'opacity-100' : 'h-0 w-0 opacity-0 overflow-hidden'}
        `}
      >
        <span className="block">{renderItems}</span>
      </div>
    </div>
  );
};

export default Dropdown;
