import { twMerge } from '@/functions/twMerge';
import classNames from 'classnames';
export interface TypographyProps {
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  class?: string;
  text: string;
  fontsize?: 'text-2xl' | 'text-xl' | 'text-lg' | 'text-base' | 'text-sm' | 'text-xs' | 'text-xxs';
  fontweight?: 'font-bold' | 'font-normal';
}

const Typography = ({
  component = 'p',
  class: additionalClasses,
  text,
  fontsize = 'text-base',
  fontweight = 'font-normal',
}: TypographyProps) => {
  const baseClasses = 'font-normal text-gray-700 font-["Open Sans"]';
  const combinedClasses = twMerge(classNames(baseClasses, fontsize, fontweight, additionalClasses));
  const Component = component;

  return <Component className={combinedClasses}>{text}</Component>;
};

export default Typography;
