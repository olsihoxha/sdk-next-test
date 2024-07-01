import React, { FC } from 'preact/compat';
import Element, { IllustrationComponentProps } from './Illustration';
import register from '../../../../register';

const Illustration: FC<IllustrationComponentProps> = ({
  illustration,
  size,
  color,
  primaryColor,
  accentColor,
  highlightColor,
  backgroundColor,
}) => {
  return (
    <Element
      illustration={illustration}
      size={size}
      color={color}
      primaryColor={primaryColor}
      accentColor={accentColor}
      highlightColor={highlightColor}
      backgroundColor={backgroundColor}
    />
  );
};

register(
  Illustration,
  'liquid-illustration',
  ['illustration', 'size', 'primaryColor', 'accentColor', 'highlightColor', 'backgroundColor'],
  { shadow: true },
);

export default Illustration;
