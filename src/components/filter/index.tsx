import Element, { FilterProps } from './components/Filter';
import ThemeProvider from '../common/context/ThemeContext/ThemeProvider';

import AppProvider from '../common/context/AppContext/AppProvider';

function Filter({ styles, filter }: FilterProps) {
  return (
    <AppProvider>
      <ThemeProvider styles={styles}>
        <Element filter={filter} />
      </ThemeProvider>
    </AppProvider>
  );
}


export default Filter;
