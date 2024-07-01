import React from 'preact/compat';
import { XMarkSolid } from '@liquidcommerceteam/preact-heroicons';

interface GeneralHeaderProps {
  title: string;
  icon?: React.ReactNode;
  showCloseIcon?: boolean;
  onClose?: () => void;
  className?: string;
}

const GeneralHeader: React.FC<GeneralHeaderProps> = ({
  title,
  icon,
  showCloseIcon,
  onClose,
  className,
}) => {
  return (
    <header className={className}>
      <div className={'flex w-full items-center gap-4'}>
        {icon && <span>{icon}</span>}
        <h3>{title}</h3>
      </div>
      {showCloseIcon && (
        <div>
          <XMarkSolid className="w-6 h-6 cursor-pointer" onClick={onClose} />
        </div>
      )}
    </header>
  );
};

export default GeneralHeader;
