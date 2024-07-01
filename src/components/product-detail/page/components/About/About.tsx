import { memo } from 'preact/compat';
import { useState } from 'preact/hooks';
import classNames from 'classnames';
import Button from '../../../../common/ui/Button';

export interface AboutProps {
  description: string;
  fontFamily: string;
  color: string;
}
function About({ description, fontFamily, color }: AboutProps) {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div
      style={{
        fontFamily,
        color,
      }}
      className={`w-full h-auto flex flex-col items-start justify-start mt-6 font-["Open_Sans"]`}
    >
      <div className="flex justify-between">
        <h6 className="h6 font-bold text-sm md:text-base">About this product:</h6>
      </div>
      <div className="py-2 text-xs md:text-sm">
        <div
          className={classNames({
            'line-clamp-3 break-words': !seeMore,
          })}
        >
          {description}
        </div>
        <Button
          variant="plain"
          className="!text-primary font-normal border-0 hover:bg-inherit text-xs md:text-sm"
          onClick={() => setSeeMore((state) => !state)}
          style={{ padding: 0, height: 0 }}
        >
          {seeMore ? 'See Less' : 'See More +'}
        </Button>
      </div>
    </div>
  );
}

export default memo(About);
