import { StyleProps } from './StyleProps';

export default function Styles(): StyleProps {
  return {
    base: {
      all: 'fixed md:static bottom-0 md:bottom-auto left-0 md:left-auto z-[9999] w-full shadow rounded-lg font-["Poppins"] bg-white max-w-full md:w-full',
      mobile: {
        base: '',
        active: {
          on: 'rounded-none ',
          off: 'mb-[70px] px-[15px] !shadow-none !rounded-none pt-5',
        },
      },
    },
    title: {
      base: 'leading-[22px] text-base px-4 py-2 text-700 font-bold text-gray-900 bg-[#F7FBFF] font-["Open_Sans"]',
      mobile: 'text-center w-full fixed top-0 left-0',
    },
    back: {
      base: 'block md:hidden pl-3 h-10 z-50 fixed top-0 left-0 flex items-center text-primary',
      chevron: 'w-5 h-5',
      text: 'ml-2',
    },
    cards: {
      mobile: {
        base: '',
        open: 'bg-white fixed h-[calc(100vh-34px)] top-[38px] left-0 w-full',
        close: '',
        active: {
          on: 'max-h-[calc(100vh-34px)]	overflow-y-scroll overflow-x-hidden scrollbar-hide',
          off: 'overflow-y-scroll overflow-x-hidden',
        },
      },
    },
    card: {
      base: {
        all: 'cursor-pointer border-b border-[#F7FBFF] p-4 flex',
        mobile: {
          base: '',
          active: {
            on: 'border !border-primary !px-2 !py-2 md:!px-4 md:!py-4 rounded-lg',
            off: 'hidden',
          },
        },
      },
      checkbox: {
        base: 'shrink-0	h-4 w-4 min-h-4 min-w-4 rounded-full bg-[#FFF] mr-2 md:mr-0 border-[#1A56DB]',
        active: {
          on: 'border-[3.5px]',
          off: 'border-[0.5px]',
        },
      },
      details: {
        base: 'flex justify-between items-start w-full',
        info: {
          base: 'flex-col justify-start w-full font-["Open_Sans"]',
          top: 'flex items-start justify-between',
          retailer: {
            base: 'text-xs md:text-sm text-[#111928] font-bold pr-2 md:px-2',
            mobile: 'text-xs md:text-sm text-[#111928] font-bold pr-2 md:px-2',
          },
          delivery: {
            base: {
              mobile: {
                base: '',
                active: {
                  on: 'flex items-center gap-2 pl-0 md:pl-2 items-center',
                  off: 'flex-col justify-start pl-0 md:pl-2',
                },
              },
            },
            time: {
              base: 'rounded-md inline-flex w-fit px-1.5 py-1 text-center text-[10px] md:text-xs font-bold my-0 md:my-2 items-center whitespace-nowrap',
              mobile: {
                base: '',
                active: {
                  on: 'my-2',
                  off: '',
                },
              },
            },
            fee: {
              base: 'text-[10px] md:text-xs text-[#4B5563]',
              mobile: 'text-[10px] md:text-xs text-[#4B5563]',
            },
          },
        },
      },
      price: 'text-base md:text-[20px] font-bold font-["Open_Sans"]',
      active: 'text-primary text-xs',
    },
  };
}
