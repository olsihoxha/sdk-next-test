export interface OrderConfirmationStyleProps {
  wrapperTemp: string;
  standardWrapper: string;
  dialogWrapper: string;
  header: Header;
  body: OrderConfirmationBody;
  textHighlight: string;
  bgHighlight: string;
  gapSixWrapper: string;
}

interface Header {
  wrapper: string;
  title: string;
  icon: string;
}

interface OrderConfirmationBody {
  wrapper: string;
  title: string;
  subTitle: string;
  paragraph: string;
  button: string;
}
