import classNames from 'classnames';
import { FunctionComponent } from 'preact';
import { isCartDialogOpen } from '@/signals';

const DialogWrapper: FunctionComponent = ({ children }) => {
  return (
    <div
      className={classNames(
        'fixed top-0 left-0',
        'z-50 bg-slate-900 p-4',
        'bg-opacity-80 z-100',
        'flex items-start justify-end',
        'transition-opacity ease-in duration-200',
        'transition-width ease-in duration-100',
        'transition-height ease-in duration-100',
        { 'opacity-100 w-full h-full': isCartDialogOpen.value },
        { 'opacity-0 w-0 h-0': !isCartDialogOpen.value },
      )}
    >
      <div
        className={classNames(
          'w-[512px] h-5/6 bg-white z-99 rounded-2xl duration-200 transition-transform ease-in-out',
          { 'scale-100': isCartDialogOpen.value },
          { 'scale-90': !isCartDialogOpen.value },
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default DialogWrapper;
