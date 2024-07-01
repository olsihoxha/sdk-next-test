import { defaultValue, ThemeContext } from './ThemeContext';
import type { ComponentChildren } from 'preact';
import { Styles } from '../../../../types';
import { useMemo } from 'preact/hooks';

function ThemeProvider({ children, styles }: { children: ComponentChildren; styles: Styles }) {
  // TODO Manage style state
  const value = useMemo(
    () => ({ ...defaultValue, styles: { ...defaultValue.styles, ...styles } }),
    [styles],
  );
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
