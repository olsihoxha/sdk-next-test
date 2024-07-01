import { JSX, memo, ReactNode } from 'preact/compat';
import Button from '../../../ui/Button';

type Props = {
  icon: ReactNode;
  disabled: boolean;
  onClick: JSX.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

function ScrollButton({ icon, disabled, onClick, className }: Props) {
  return (
    <Button
      className={`transition-opacity ${className}`}
      shape="circle"
      variant="solid"
      onClick={onClick}
      size="xs"
      style={{
        backgroundColor: 'unset',
        opacity: disabled ? 0.3 : 1,
      }}
      icon={icon}
    />
  );
}

export default memo(ScrollButton);
