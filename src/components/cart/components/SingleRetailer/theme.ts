export interface SingleRetailerTheme {
  wrapper: Wrapper;
  text: Text;
  button: Button;
  image: string;
  heroIcons: HeroIcon;
  readonly: ReadOnly;
}
interface Text {
  name: string;
  size: string;
  fulfillment: string;
  quantity: string;
  productPrice: string;
  engraving: {
    text: string;
    personalization: string;
    fee: string;
  };
}

interface Wrapper {
  main: string;
  height: string;
  sticky: string;
  sub: string;
  image: string;
  productInfo: string;
  size: string;
  scroll: string;
  badge: {
    main: string;
    sub: string;
    image: string;
  };
  controls: {
    main: string;
    inputs: string;
  };
  price: string;
  icon: string;
}

interface Button {
  base: string;
}

interface HeroIcon {
  trash: string;
  minus: string;
  plus: string;
}

interface ReadOnly {
  readonlyWrapper: string;
  readonlyTrue: string;
  readonlyFalse: string;
}
