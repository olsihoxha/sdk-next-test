export interface GoToCheckoutTheme {
  wrapper: Wrapper;
  form: Form;
  price: PriceSection;
  text: Text;
  button: Button;
  logo: Logo;
}
interface Text {
  havePromo: Promo;
  base: string;
  promoCode: string;
}

interface Wrapper {
  main: string;
  apply: string;
  input: string;
  subtotal: string;
  promoCode: string;
  logo: string;
}

interface Button {
  apply: string;
}

interface Logo {
  tag: string;
  xmark: string;
}

interface Promo {
  animation: string;
  text: string;
  maxOppacity: string;
  minOppacity: string;
}

interface Form {
  animation: string;
  text: string;
  maxOppacity: string;
  minOppacity: string;
}

interface PriceSection {
  animation: string;
  text: string;
  maxOppacity: string;
  minOppacity: string;
}
