
import { mergeDeep, parseObject } from '@/functions';
import Element, { BreadcrumbItem, BreadcrumbProps } from './breadcrumb';
import { breadcrumbTheme } from './breadcrumb.theme';
import { getTheme } from '@/signals';

function Breadcrumb({ theme: customTheme, items: rawItems, current }: BreadcrumbProps) {
  const items = parseObject<Array<BreadcrumbItem>>(rawItems);
  const theme = mergeDeep(mergeDeep(breadcrumbTheme, getTheme().breadcrumbs), customTheme);

  return <Element current={current} items={items} theme={theme} />;
}



export type { BreadcrumbTheme, BreadcrumbProps, BreadcrumbItem } from './breadcrumb';
export default Breadcrumb;
