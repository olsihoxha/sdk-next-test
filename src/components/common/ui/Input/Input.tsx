import classNames from 'classnames';
import { CSSProperties, forwardRef, useEffect, useMemo, useRef, useState } from 'preact/compat';
import { ComponentChildren } from 'preact';
import { CONTROL_SIZES } from '../../type/constants';
import { useConfig } from '../../context/ThemeContext/ThemeContext';
import { isEmpty } from '../../util/isEmpty';
import { isNil } from '../../util/isNil';

export interface InputProps {
  id?: string;
  asElement?: any;
  className?: string;
  inputClassContainer?: string;
  disabled?: boolean;
  invalid?: boolean;
  prefix?: ComponentChildren;
  size?: string;
  suffix?: ComponentChildren;
  textArea?: boolean;
  type?: string;
  style?: CSSProperties | undefined;
  unstyle?: boolean;
  optional?: boolean;
  bColor?: string;
  characterCount?: string;
  field?: any;
  form?: any;
  label?: string;
  labelColor?: string;
  value?: string;
  defaultValue?: string;
  onInput?: (e: any) => void;
}

const Input = forwardRef((props: InputProps, ref) => {
  const {
    id = '',
    asElement = 'input', //: Component,
    className = '',
    disabled,
    optional,
    invalid,
    prefix,
    size,
    suffix,
    inputClassContainer,
    textArea,
    type,
    style,
    unstyle,
    characterCount,
    bColor,
    field,
    form,
    label,
    labelColor,
    ...rest
  } = props;

  const Component = asElement;
  const [prefixGutter, setPrefixGutter] = useState(0);
  const [suffixGutter, setSuffixGutter] = useState(0);

  const { controlSize, direction } = useConfig();

  const inputSize = size || controlSize;

  const fixControlledValue = (val: string | undefined) => {
    if (typeof val === 'undefined' || val === null) {
      return '';
    }
    return val;
  };

  if ('value' in props) {
    rest.value = fixControlledValue(props.value);
    delete rest.defaultValue;
  }

  const isInvalid = useMemo(() => {
    let validate = false;
    if (!isEmpty(form)) {
      const { touched, errors } = form;
      const touchedField = touched?.field?.name;
      const errorField = errors?.field?.name;
      validate = touchedField && errorField;
    }
    if (typeof invalid === 'boolean') {
      validate = invalid;
    }
    return validate;
  }, [form, invalid]);

  const inputDefaultClass = 'input';
  const inputSizeClass = `input-${inputSize} h-${CONTROL_SIZES[inputSize] + (label ? 1 : 0)} ${
    label ? 'pb-0 pt-4' : ''
  }`;
  const inputFocusClass = `focus:ring-${bColor} focus-within:ring-${bColor} focus-within:border-${bColor} focus:border-${bColor}`;
  const inputWrapperClass = `input-wrapper ${prefix || suffix ? className : ''}`;
  const inputClass = classNames(
    inputDefaultClass,
    !textArea && inputSizeClass,
    !isInvalid && inputFocusClass,
    !prefix && !suffix ? className : '',
    disabled && 'input-disabled',
    isInvalid && 'input-invalid',
    textArea && 'input-textarea',
  );

  const prefixNode = useRef<HTMLDivElement | null>();
  const suffixNode = useRef<HTMLDivElement | null>();
  const inputRef = useRef<HTMLInputElement | null>();

  const getAffixSize = () => {
    if (!prefixNode.current && !suffixNode.current) {
      return;
    }
    const prefixNodeWidth = prefixNode?.current?.offsetWidth;
    const suffixNodeWidth = suffixNode?.current?.offsetWidth;

    if (isNil(prefixNodeWidth) && isNil(suffixNodeWidth)) {
      return;
    }

    if (prefixNodeWidth) {
      setPrefixGutter(prefixNodeWidth);
    }

    if (suffixNodeWidth) {
      setSuffixGutter(suffixNodeWidth);
    }
  };

  useEffect(() => {
    getAffixSize();
  }, [prefix, suffix]);

  const remToPxConvertion = (pixel: number) => 0.0625 * pixel;

  const affixGutterStyle = () => {
    const leftGutter = `${remToPxConvertion(prefixGutter) + 1}rem`;
    const rightGutter = `${remToPxConvertion(suffixGutter) + 1}rem`;
    const gutterStyle: { paddingLeft?: string; paddingRight?: string } = {};

    if (direction === 'ltr') {
      if (prefix) {
        gutterStyle.paddingLeft = leftGutter;
      }

      if (suffix) {
        gutterStyle.paddingRight = rightGutter;
      }
    }

    if (direction === 'rtl') {
      if (prefix) {
        gutterStyle.paddingRight = leftGutter;
      }

      if (suffix) {
        gutterStyle.paddingLeft = rightGutter;
      }
    }

    return gutterStyle;
  };

  const inputProps = {
    className: !unstyle ? inputClass : '',
    disabled,
    type,
    ref,
    ...field,
    ...rest,
  };

  const renderTextArea = <textarea style={style} {...inputProps} />;

  const renderInput = (
    <div
      onClick={() => inputRef.current?.focus?.()}
      className={classNames({ relative: label }, inputClassContainer)}
    >
      <Component style={{ ...affixGutterStyle(), ...style }} {...inputProps} id={id} />
      {label ? (
        <div className="w-full absolute top-1 flex justify-between items-center px-3 pt-[2px]">
          <label className="text-xs font-bold" style={{ color: labelColor }}>
            {label}
            {optional ? <span className="text-[11px] font-normal ml-1">(optional)</span> : null}
          </label>
          {characterCount ? (
            <label className="text-xs font-normal" style={{ color: labelColor }}>
              {characterCount}
            </label>
          ) : null}
        </div>
      ) : null}
    </div>
  );

  const renderAffixInput = (
    <span className={inputWrapperClass}>
      {prefix ? (
        <div className="input-suffix-start" ref={(node) => (prefixNode.current = node)}>
          {' '}
          {prefix}{' '}
        </div>
      ) : null}
      {renderInput}
      {suffix ? (
        <div className="input-suffix-end" ref={(node) => (suffixNode.current = node)}>
          {suffix}
        </div>
      ) : null}
    </span>
  );

  const renderChildren = () => {
    if (textArea) {
      return renderTextArea;
    }

    if (prefix || suffix) {
      return renderAffixInput;
    }
    return renderInput;
  };

  return renderChildren();
});

export default Input;
