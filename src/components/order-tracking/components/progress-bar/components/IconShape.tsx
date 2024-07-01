import classNames from 'classnames';
import { h } from 'preact';

export interface IconShapeProps {
  icon: h.JSX.Element;
  isFulfilled: boolean;
}

const IconShape = ({ icon, isFulfilled }: IconShapeProps) => {
  return (
    <div
      data-testid="icon"
      className={classNames(
        'flex w-6 h-6 min-w-6 min-h-6 lg:w-12 lg:h-12 lg:min-w-12 lg:min-h-12 justify-center items-center rounded-full border-1 lg:border-2 border-primary',
        isFulfilled && 'bg-primary',
      )}
    >
      {icon}
    </div>
  );
};

export default IconShape;
