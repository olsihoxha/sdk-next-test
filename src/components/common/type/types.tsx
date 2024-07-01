export type all_sizes = {
  XS: string;
  SM: string;
  MD: string;
  LG: string;
};

export type control_sizes = {
  [p: string]: number;
};

export type view_layout = {
  HORIZONTAL: string;
  VERTICAL: string;
  INLINE: string;
};

export type directions = {
  TOP: string;
  RIGHT: string;
  BOTTOM: string;
  LEFT: string;
};

export type selection_modes = {
  YEAR: string;
  MONTH: string;
  DAY: string;
};

export type picker_views = {
  YEAR: string;
  MONTH: string;
  DATE: string;
};

export type element_status = {
  DANGER: string;
  SUCCESS: string;
  WARNING: string;
};

export type steps_status = {
  COMPLETE: string;
  PENDING: string;
  IN_PROGRESS: string;
  ERROR: string;
};

export type element_placement = {
  TOP_START: string;
  TOP_CENTER: string;
  TOP_END: string;
  BOTTOM_START: string;
  BOTTOM_CENTER: string;
  BOTTOM_END: string;
  MIDDLE_START_TOP: string;
  MIDDLE_START_BOTTOM: string;
  MIDDLE_END_TOP: string;
  MIDDLE_END_BOTTOM: string;
};

export type dropdown_item_type = {
  DEFAULT: string;
  HEADER: string;
  DIVIDER: string;
  CUSTOM: string;
};

export type DAY_DURATION = 86400000;
