import { FC, useEffect, useState } from 'preact/compat';
import * as Illustrations from './components/index';
import { IllustrationProps } from './components/TrackOrderIllustration';

export interface IllustrationComponentProps extends IllustrationProps {
  illustration: string;
  color?: string;
  size?: string;
}

const Illustration: FC<IllustrationComponentProps> = ({
  illustration,
  color,
  size,
  primaryColor,
  accentColor,
  highlightColor,
  backgroundColor,
}) => {
  const [IllustrationComponent, setIllustrationComponent] = useState<FC<IllustrationProps> | null>(
    null,
  );

  useEffect(() => {
    if (illustration !== null) {
      const Illustration = Illustrations.default[illustration] as FC;
      setIllustrationComponent(() => Illustration);
    } else {
      console.error(`Invalid component: ${illustration}`);
      setIllustrationComponent(() => null);
    }
  }, [illustration]);

  return (
    <div>
      {IllustrationComponent ? (
        <IllustrationComponent
          color={color}
          size={size}
          primaryColor={primaryColor && primaryColor}
          accentColor={accentColor && accentColor}
          highlightColor={highlightColor && highlightColor}
          backgroundColor={backgroundColor && backgroundColor}
        />
      ) : null}
    </div>
  );
};

export default Illustration;
