import React from 'preact/compat';

interface GeneralButtonProps {
  btnText: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GeneralButton: React.FC<GeneralButtonProps> = ({
  btnText,
  icon,
  className,
  onClick,
}: GeneralButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {icon && <span> {icon} </span>}
      {btnText}
    </button>
  );
};

export default GeneralButton;
