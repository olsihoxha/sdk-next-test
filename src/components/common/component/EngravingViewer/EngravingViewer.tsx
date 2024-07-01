import classNames from 'classnames';
import { memo } from 'preact/compat';
import { EngravingMessage } from '@/types';

interface EngravingViewerElementProps {
  backgroundColor: string;
  color: string;
  engravingMessage: string[];
  lines: number;
  onEdit: () => void;
  price?: number | string;
  rounded: boolean;
}

function EngravingViewer({
  engravingMessage,
  price = 50,
  onEdit,
  lines,
  rounded,
  color,
  backgroundColor,
}: EngravingViewerElementProps) {
  return (
    <>
      <div className="w-full flex items-center">
        <h5 className="h5 text-base font-extrabold mr-2">Personalized +${price}</h5>
        <a
          role="button"
          onClick={onEdit}
          style={{
            color,
          }}
        >
          Edit
        </a>
      </div>
      {Object.entries(engravingMessage)
        .slice(0, lines)
        .filter((l) => l[1] !== '')
        .map((val, i) => (
          <div
            key={`line${i}`}
            className={classNames(
              'text-sm px-3 py-2 mt-2',
              rounded ? 'rounded-lg' : 'rounded-none',
            )}
            style={{
              backgroundColor,
              color,
            }}
          >
            <span className="font-bold">Line {i + 1}:</span>
            &nbsp;{engravingMessage?.[val?.[0] as keyof EngravingMessage]}
          </div>
        ))}
    </>
  );
}

export default memo(EngravingViewer);
