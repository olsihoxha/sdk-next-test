
import Element, { ProgressBarProps } from './ProgressBar';
import { FC } from 'preact/compat';

const ProgressBar: FC<ProgressBarProps> = ({ ...props }) => {
  return <Element {...props} />;
};



export default ProgressBar;
