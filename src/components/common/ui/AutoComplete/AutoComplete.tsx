import { FC, useRef, useState } from 'preact/compat';
import autoComplete from '@tarekraafat/autocomplete.js';
import Input from '../Input';
import { useEffect } from 'preact/hooks';
import { useClient } from '@/signals';

interface Props {
  bg?: {
    primary: string;
    secondary: string;
  };
  fontColor?: string;
  handleSelection: (placeId: string) => void;
  initialValue: string;
  inputBg?: string;
  label?: string;
  mobile?: boolean;
  optionsRadius?: string;
  primaryColor?: string;
  radius?: string;
  rounded?: boolean;
}

const AutoComplete: FC<Props> = (props) => {
  const {
    handleSelection,
    label = '',
    radius = '1.5rem',
    optionsRadius = '10px',
    inputBg,
    initialValue,
    bg,
    primaryColor,
    fontColor,
    rounded = true,
    mobile,
  } = props;

  const [currentAddress, setCurrentAddress] = useState(initialValue);

  const { client } = useClient();

  const autoCompleteRef = useRef<HTMLDivElement>(null);
  const autoCompleteParentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const autoCompleteJS = new autoComplete({
      debounce: 500,
      selector: () => {
        return autoCompleteRef.current;
      },
      wrapper: false,
      // data: {
      //   src: async (query) => {
      //     const predictions = await liquid.address({ search: query });
      //     return predictions.map(({ description, placeId }) => ({
      //       id: placeId,
      //       val: description,
      //       meta: placeId,
      //     }));
      //   },
      //   keys: ['val'],
      // },
      resultsList: {
        noResults: true,
        tabSelect: true,
        destination: () => {
          return autoCompleteParentRef.current;
        },
        element: (list, data) => {
          list.className =
            'ring-1 ring-black ring-opacity-5 mt-2 top-full w-full z-[1000] absolute scroll-smooth overflow-auto text-base focus:outline-none sm:text-sm shadow-lg';
          list.style = `color: ${fontColor}; border-radius: ${
            rounded && !mobile ? optionsRadius : 'unset'
          }; background: ${inputBg ? inputBg : bg?.primary};`;
          if (data.results.length === 0) {
            const info = document.createElement('li');
            info.innerHTML = 'No results were found';
            info.className = 'flex cursor-pointer justify-between items-center py-3 px-5';
            list.prepend(info);
          }
        },
      },
      resultItem: {
        element: (item, data) => {
          item.className = 'flex cursor-pointer justify-between items-center py-3 px-5';
          item.addEventListener(
            'mouseover',
            () => {
              item.style = `color: ${primaryColor};`;
            },
            false,
          );
          item.addEventListener(
            'mouseout',
            () => {
              item.style = `color: ${fontColor};`;
            },
            false,
          );
          item.addEventListener(
            'click',
            () => {
              handleSelection(data.value.id);
              setCurrentAddress(data.match);
            },
            false,
          );
        },
      },
      events: {
        input: {
          focus: () => {
            if (autoCompleteJS.input.value.length) {
              autoCompleteJS.start();
            }
          },
        },
      },
    });
  }, [
    bg?.primary,
    fontColor,
    handleSelection,
    inputBg,
    client,
    mobile,
    optionsRadius,
    primaryColor,
    rounded,
  ]);

  return (
    <div className="relative">
      <div className="w-full flex justify-center items-center mt-2" ref={autoCompleteParentRef}>
        <Input
          ref={autoCompleteRef}
          label={label}
          inputClassContainer="w-full flex justify-center items-center"
          labelColor={fontColor}
          className="leading-5 border-none text-sm border-0 outline-none ring-0 focus-within:border-0 focus-within:ring-0 focus:outline-none"
          style={{
            color: fontColor,
            borderRadius: radius,
            background: inputBg,
          }}
          size="md"
          value={currentAddress}
          onInput={(e) => {
            setCurrentAddress(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default AutoComplete;
