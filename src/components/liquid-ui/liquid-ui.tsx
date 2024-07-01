import { ComponentChildren, FunctionalComponent } from 'preact';
import { useEffect } from 'preact/hooks';
import { defaultColors, LiquidUITheme } from './theme';
import { parseObject } from '@/functions';
import { setTheme } from '@/signals/theme.signals';

export interface LiquidUIProps {
  theme: LiquidUITheme;
  children?: ComponentChildren;
}

const LiquidUI: FunctionalComponent<LiquidUIProps> = (props) => {
  const { theme: rawTheme, children } = props;
  const theme = parseObject<LiquidUITheme>(rawTheme);

  useEffect(() => {
    Object.keys(defaultColors).forEach((colorKey) => {
      const color = theme?.colors[colorKey] || defaultColors[colorKey];
      document.documentElement.style.setProperty(`--liquid-ui-color-${colorKey}`, color.join(' '));
    });

    setTheme(theme);
  }, [theme]);

  return <>{children}</>;
};

export default LiquidUI;
