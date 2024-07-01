import { ChevronLeftOutline, ChevronRightOutline } from '@liquidcommerceteam/preact-heroicons';
import { useResponsive } from '../../hooks';
import { useMemo } from 'react';

export interface BreadcrumbTheme {
  root: {
    base: string;
    mobileBase: string;
  };
  item: {
    base: string;
    chevron: string;
    current: string;
  };
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  current: string;
  theme?: Partial<BreadcrumbTheme>;
  items?: Array<BreadcrumbItem>;
}

function Breadcrumb({ current, items, theme }: BreadcrumbProps) {
  const { smaller } = useResponsive();

  const hrefUrl = useMemo(
    () => (items && items?.length > 0 ? items.slice(-1)[0].href : '/'),
    [items],
  );

  return (
    <div className={smaller.md ? theme.root.mobileBase : theme.root.base}>
      {smaller.md && items?.length > 0 && current ? (
        <a href={hrefUrl}>
          <div className={theme.item.base}>
            <ChevronLeftOutline className={theme.item.chevron} />
            <span>Back</span>
          </div>
        </a>
      ) : (
        <>
          {items?.map((crumb, index) => (
            <div key={`crumb-${index}`} className={theme.item.base}>
              <a href={crumb.href}>{crumb.label}</a>
              <ChevronRightOutline className={theme.item.chevron} />
            </div>
          ))}
          <div className={theme.item.current}>{current}</div>
        </>
      )}
    </div>
  );
}

export default Breadcrumb;
