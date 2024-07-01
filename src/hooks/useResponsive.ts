import { useEffect, useState } from 'preact/hooks';

const screens = {
  xs: '360px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
const breakpointInt = (str = '') => {
  return parseInt(str.replace('px', ''), 10);
};

const useResponsive = () => {
  const getAllSizes = (comparator = 'smaller') => {
    const currentWindowWidth = window.innerWidth;
    return Object.fromEntries(
      Object.entries(screens).map(([key, value]) => {
        const comparison =
          comparator === 'larger'
            ? currentWindowWidth > breakpointInt(value as string)
            : currentWindowWidth < breakpointInt(value as string);
        return [key, comparison];
      }),
    );
  };

  const getResponsiveState = () => {
    const currentWindowWidth = window.innerWidth;
    return {
      windowWidth: currentWindowWidth,
      larger: getAllSizes('larger'),
      smaller: getAllSizes('smaller'),
      isMobile: (width = currentWindowWidth) => width < 768,
    };
  };

  const [responsive, setResponsive] = useState(getResponsiveState());

  const resizeHandler = () => {
    const responsiveState = getResponsiveState();
    setResponsive(responsiveState);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsive.windowWidth]);

  return responsive;
};

export default useResponsive;
