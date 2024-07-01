import Element from './Search';
import ThemeProvider from '../common/context/ThemeContext/ThemeProvider';
import AppProvider from '../common/context/AppContext/AppProvider';

import type { SearchOption, SearchProps } from '../../build-types';

function Search({ styles, placeholder, options, onSearch, onSelect }: SearchProps) {
  let parsedItems: Array<SearchOption> = null;
  try {
    parsedItems = options ? JSON.parse(options as string) : options || null;
  } catch (e) {
    console.error('Error parsing search options');
  }

  return (
    <AppProvider>
      <ThemeProvider styles={styles}>
        <Element
          placeholder={placeholder}
          onSearch={onSearch}
          options={parsedItems}
          onSelect={onSelect}
          styles={styles}
        />
      </ThemeProvider>
    </AppProvider>
  );
}



export default Search;
