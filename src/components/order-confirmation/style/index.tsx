import { OrderConfirmationStyleProps } from './OrderConfirmationStyleProps';

export default function OrderConfirmationStyles(): OrderConfirmationStyleProps {
  return {
    wrapperTemp: 'flex w-full justify-center pb-4',
    standardWrapper: 'flex flex-col min-w-[480px] px-6 py-4 gap-8 text-light-font-color',
    dialogWrapper:
      'flex flex-col min-w-[480px] bg-white shadow-2xl rounded-[32px] px-6 py-4 gap-8 text-light-font-color',
    textHighlight: 'text-light-primary-color',
    bgHighlight: 'flex gap-4 flex-col text-sm px-6 py-4 bg-light-secondary-background rounded-2xl',
    gapSixWrapper: 'flex flex-col gap-6',
    header: {
      wrapper: 'rounded-t-[32px]',
      title: 'flex gap-4 rounded-t-[32px] text-2xl font-bold items-center text-light-font-color',
      icon: '',
    },
    body: {
      wrapper: 'flex flex-col items-center gap-4',
      title: 'text-xl font-bold',
      subTitle: 'text-base font-bold',
      paragraph: 'text-center',
      button:
        'flex w-[77%] justify-center gap-3 items-center py-2 px-3 bg-primary text-white rounded-[100px]',
    },
  };
}
