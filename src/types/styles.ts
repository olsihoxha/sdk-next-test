type HexColor = string;

interface Text {
  headings: {
    font: HexColor;
    color: HexColor;
  };
  body: {
    font: HexColor;
    color: HexColor;
  };
  hyperlink: {
    font: HexColor;
    color: HexColor;
  };
}

interface QtyElement {
  type: string;
  active: boolean;
  text: HexColor;
  bg: HexColor;
  border: HexColor;
  btnText: HexColor;
  btnBg: HexColor;
  btnBorder: HexColor;
}

interface StyleCartItem {
  imgBorder: {
    active: boolean;
    border: HexColor;
  };
  bg: HexColor;
  border: HexColor;
}

interface Overlay {
  btnSave: {
    text: HexColor;
    bg: HexColor;
    border: HexColor;
  };
  btnCancel: {
    text: HexColor;
    bg: HexColor;
    border: HexColor;
  };
}

interface Alerts {
  text: HexColor;
  bg: HexColor;
  border: HexColor;
}

interface General {
  header: {
    text: HexColor;
    bg: HexColor;
    border: HexColor;
    btnText: HexColor;
    btnBg: HexColor;
    btnBorder: HexColor;
  };
  footer: {
    text: HexColor;
    bg: HexColor;
    border: HexColor;
    btnText: HexColor;
    btnBg: HexColor;
    btnBorder: HexColor;
  };
  element: {
    corners: 'sharp' | 'rounded';
    bg: HexColor;
    border: HexColor;
    liquidLegal: boolean;
  };
  engraving: {
    active: boolean;
  };
}

export interface Styles {
  text: Text;
  components: {
    qtyElement: QtyElement;
    cartItem: StyleCartItem;
    overlay: Overlay;
    alerts: Alerts;
  };
  element?: {
    corners: 'sharp' | 'rounded';
    bg: string;
    border: string;
    liquidLegal: boolean;
  };
  general: General;
  overlay?: {
    btnSave: {
      text: HexColor;
      bg: HexColor;
      border: HexColor;
    };
  };

  // TODO: remove
  /** @deprecated */
  colors: { primary: string; bg: { primary: string; secondary: string } };
  /** @deprecated */
  fonts: { color: string; family: string };
  /** @deprecated */
  rounded: true;
}
