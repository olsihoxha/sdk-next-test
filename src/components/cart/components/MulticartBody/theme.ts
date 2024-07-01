export interface MultiCartBodyTheme {
  wrapper: Wrapper;
  text: Text;
  logo: Logo;
}
interface Text {
  retailerName: string;
  items: string;
  price: string;
}

interface Wrapper {
  main: string;
  sub: string;
  retailWrapper: string;
  textWrapper: string;
}

interface Logo {
  chevronRightIcon: string;
  retailIcon: string;
}
