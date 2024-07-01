import Element from './ScrollButton';
import { JSX, useMemo } from 'preact/compat';
import { ChevronLeftOutline, ChevronRightOutline } from '@liquidcommerceteam/preact-heroicons';

type Props = {
  icon: 'Prev' | 'Next';
  disabled: boolean;
  onClick: JSX.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};
export const SCROLL_BUTTON_ICON = {
  PREV: 'Prev',
  NEXT: 'Next',
};
const ScrollButton = (props: Props): JSX.Element => {
  const { disabled, icon = SCROLL_BUTTON_ICON.PREV, onClick, className } = props;

  const iconComponent = useMemo(() => {
    switch (icon) {
      case 'Prev':
        return (
          <ChevronLeftOutline
            height="1.5rem"
            width="1.5rem"
            className={`${className} border-none`}
          />
        );
      case 'Next':
        return (
          <ChevronRightOutline
            height="1.5rem"
            width="1.5rem"
            className={`${className} border-none`}
          />
        );
      default: {
        return null;
      }
    }
  }, [className, icon]);

  return (
    <div className="flex items-center">
      <Element icon={iconComponent} onClick={onClick} disabled={disabled} className={className} />
    </div>
  );
};

export default ScrollButton;
