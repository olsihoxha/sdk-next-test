export interface CartHeaderTheme {
  wrapper: Wrapper;
  text: Text;
  button: Button;
  logo: Logo;
}
interface Text {
  retailerName: string;
  title: string;
}

interface Wrapper {
  main: string;
  sub: string;
  retailIcon: {
    main: string;
    sub: string;
  };
}

interface Button {
  base: string;
}

interface Logo {
  heroIcon: string;
  shoppingIcon: string;
}
