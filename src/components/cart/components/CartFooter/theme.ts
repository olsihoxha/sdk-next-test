export interface CartFooterTheme {
  wrapper: Wrapper;
  text: Text;
}
interface Text {
  powered: string;
  liquid: {
    text: string;
    dot: string;
  };
  information: {
    text: string;
    color: string;
  };
}

interface Wrapper {
  main: string;
  sub: string;
  wrapperWithoutTopPadding: string;
  poweredByWrapper: string;
}
