import {
  all_sizes,
  control_sizes,
  directions,
  dropdown_item_type,
  element_placement,
  element_status,
  picker_views,
  selection_modes,
  steps_status,
  view_layout,
} from './types';

export const SIZES: all_sizes = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
};

export const CONTROL_SIZES: control_sizes = {
  [SIZES.XS]: 7,
  [SIZES.SM]: 9,
  [SIZES.MD]: 11,
  [SIZES.LG]: 14,
};

export const LAYOUT: view_layout = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  INLINE: 'inline',
};

export const DIRECTIONS: directions = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
};

export const SELECTION_MODES: selection_modes = {
  YEAR: 'year',
  MONTH: 'month',
  DAY: 'day',
};

export const PICKER_VIEWS: picker_views = {
  YEAR: 'year',
  MONTH: 'month',
  DATE: 'date',
};

export const STATUS: element_status = {
  DANGER: 'danger',
  SUCCESS: 'success',
  WARNING: 'warning',
};

export const STEPS_STATUS: steps_status = {
  COMPLETE: 'complete',
  PENDING: 'pending',
  IN_PROGRESS: 'in-progress',
  ERROR: 'error',
};

export const PLACEMENT: element_placement = {
  TOP_START: 'top-start',
  TOP_CENTER: 'top-center',
  TOP_END: 'top-end',
  BOTTOM_START: 'bottom-start',
  BOTTOM_CENTER: 'bottom-center',
  BOTTOM_END: 'bottom-end',
  MIDDLE_START_TOP: 'middle-start-top',
  MIDDLE_START_BOTTOM: 'middle-start-bottom',
  MIDDLE_END_TOP: 'middle-end-top',
  MIDDLE_END_BOTTOM: 'middle-end-bottom',
};

export const DROPDOWN_ITEM_TYPE: dropdown_item_type = {
  DEFAULT: 'default',
  HEADER: 'header',
  DIVIDER: 'divider',
  CUSTOM: 'custom',
};

export const DAY_DURATION = 86400000;

export const SEE_ALL_BRAND = 'ALL';
export const SEE_ALL_CATEGORY = 'ALL';

export const DEFAULT_PRODUCT_IMAGE =
  'https://storage.googleapis.com/liquid-platform/assets/liquid_bottle/liquid_bottle_no_bg.png';
