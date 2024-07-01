import { MagnifyingGlassOutline, XMarkOutline } from '@liquidcommerceteam/preact-heroicons';
import { useEffect, useRef, useState } from 'preact/hooks';
import SearchIcon from '../../assets/icons/SearchIcon';
import { SearchOption, SearchProps } from '@/build-types';
import { getSearchValue } from '@/signals/catalog.signals';
import { Fragment } from 'preact/jsx-runtime';

interface InternalSearchProps extends SearchProps {
  options: Array<SearchOption>;
}

const SearchBar = ({ options, placeholder, onSearch, onSelect }: InternalSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [areSuggestionsShowing, setAreSuggestionsShowing] = useState(false);
  const [searchOptions, setSearchResponse] = useState<SearchOption[]>(options || []);
  const [avoidSearch, setAvoidSearch] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const suggestionsRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const renderSuggestion = (item: SearchOption, index: number) => {
    const parts = item.label.split(new RegExp(`(${searchQuery})`, 'gi'));
    // const modified= item.label.replace(new RegExp(`(${searchQuery})`, 'gi'), '<span className="font-bold color-[#111928]">$1</span>');
    return (
      <li
        onClick={() => {
          setAreSuggestionsShowing(false);
          setAvoidSearch(true);
          setSearchQuery(item.label);
          onSelect && onSelect?.(item);
          getSearchValue(item.label);
        }}
        key={index}
        title={item.label}
        role="option"
        className={`w-full flex items-start px-4 py-1 text-xs cursor-pointer border-none transition-all hover:text-primary ${
          areSuggestionsShowing ? 'border border-[#f4f9fd]' : ''
        }`}
      >
        <p className="font-['Open Sans'] text-sm overflow-hidden text-wrap">
          {parts.map((part, index) =>
            part.toLowerCase() === searchQuery.toLowerCase() ? (
              <span key={index} className="font-bold">
                {part}
              </span>
            ) : (
              <Fragment key={index}>{part}</Fragment>
            ),
          )}
        </p>
      </li>
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        !isInputFocused
      ) {
        setAreSuggestionsShowing(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isInputFocused]);

  useEffect(() => {
    if (searchQuery.length === 0) {
      setIsSearching(false);
      setAreSuggestionsShowing(false);
    } else if (searchQuery.length > 2 && !avoidSearch) {
      setIsSearching(true);

      if (options) {
        const timerId = setTimeout(() => {
          setSearchResponse(options);
          setIsSearching(false);
          setAreSuggestionsShowing(true);
        }, 500);

        return () => {
          clearTimeout(timerId);
        };
      }
      onSearch(searchQuery).then((options) => {
        setSearchResponse(options);
        setIsSearching(false);
        setAreSuggestionsShowing(true);
      });
    }

    setAvoidSearch(false);
  }, [avoidSearch, onSearch, options, searchQuery]);

  const handleInputFocus = () => {
    setIsInputFocused(true);
    if (searchQuery && !areSuggestionsShowing) {
      setAreSuggestionsShowing(true);
    }
  };

  return (
    <div title={searchQuery} className="relative max-w-full sm:max-w-[370px]">
      <div
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={areSuggestionsShowing}
        aria-controls="searchSuggestions"
        className="inline-flex items-center bg-[#f4f9fd] rounded py-1 sm:w-[370px] w-full"
      >
        <div className="transition-all px-2">
          <MagnifyingGlassOutline style={{ color: '#1F5EA9', strokeWidth: '2px' }} />
        </div>
        <input
          ref={inputRef}
          className="focus:ring-0 focus:ring-offset-0 ring-offset-0 ring-0	border-transparent focus:border-transparent !outline-none w-full bg-[#f4f9fd]"
          placeholder={placeholder || 'What are you looking for?'}
          onChange={(e) => {
            const newSearchQuery = (e.target as HTMLInputElement)?.value;
            setSearchQuery(newSearchQuery);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const newSearchQuery = searchOptions[0]?.label;
              setSearchQuery(newSearchQuery);
              onSelect && onSelect?.(newSearchQuery);
              setAreSuggestionsShowing(false);
              setIsInputFocused(false);
            }
          }}
          value={searchQuery}
          aria-autocomplete="list"
          onFocus={handleInputFocus}
          onBlur={() => setIsInputFocused(false)}
        />
        <div className="cursor-pointer transition-all opacity-50 hover:opacity-80 active:opacity-100 ml-2 w-6">
          {isSearching ? (
            <SearchIcon className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-primary" />
          ) : (
            <XMarkOutline
              style={{
                color: '#1F5EA9',
                display: searchQuery ? 'block' : 'none',
                strokeWidth: '2px',
              }}
              onClick={() => {
                setSearchQuery('');
                setAreSuggestionsShowing(false);
              }}
            />
          )}
        </div>
      </div>
      <ul
        ref={suggestionsRef}
        id="searchSuggestions"
        role="listbox"
        className={`${
          areSuggestionsShowing ? 'absolute' : 'hidden'
        } w-full mt-1 flex flex-col px-4 py-2 items-start gap-1 max-h-[180px] overflow-y-auto shadow-lg bg-[#f4f9fd] rounded ${areSuggestionsShowing && 'border border-[#f4f9fd]'}`}
      >
        {areSuggestionsShowing && searchOptions?.map(renderSuggestion)}
      </ul>
    </div>
  );
};

export default SearchBar;
