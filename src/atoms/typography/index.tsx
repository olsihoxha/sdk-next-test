import register from '../../register';
import Element, { TypographyProps } from './Typography';
import { FC } from 'preact/compat';

const Typography: FC<TypographyProps> = ({ ...props }) => {
  return <Element {...props} />;
};

register(
  Typography,
  'liquid-typography',
  ['class', 'text', 'component', 'fontsize', 'fontweight'],
  {
    shadow: true,
  },
);

export default Typography;
