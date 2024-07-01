import { IllustrationProps } from '@/atoms/imagery/icons/illustrations/components/TrackOrderIllustration';
import { useEffect, useState } from 'preact/compat';

export default function Amex({ color, size, highlightColor }: IllustrationProps) {
  const [fillColor] = useState(color);
  const [strokeColor, setStrokeColor] = useState(highlightColor);

  useEffect(() => {
    if (highlightColor) {
      setStrokeColor(highlightColor);
    }
  }, [highlightColor]);

  return (
    <svg
      viewBox="0 0 64 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: `${size}px` }}
    >
      <rect x="0.5" y="0.5" width="63" height="31" rx="5.5" fill={fillColor} />
      <rect x="0.5" y="0.5" width="63" height="31" rx="5.5" stroke={strokeColor} />
      <path
        d="M13.4172 10L8 21.9881H14.4851L15.2891 20.0767H17.1268L17.9308 21.9881H25.0691V20.5292L25.7051 21.9881H29.3976L30.0337 20.4984V21.9881H44.8795L46.6846 20.1263L48.3749 21.9881L56 22.0035L50.5657 16.0275L56 10H48.4932L46.736 11.8274L45.0989 10H28.9486L27.5618 13.0942L26.1425 10H19.6709V11.4092L18.951 10H13.4172ZM14.672 11.7023H17.8332L21.4264 19.8315V11.7023H24.8893L27.6647 17.5309L30.2225 11.7023H33.6681V20.3045H31.5715L31.5544 13.5639L28.4978 20.3045H26.6223L23.5486 13.5639V20.3045H19.2354L18.4177 18.376H14L13.184 20.3028H10.8731L14.672 11.7023ZM35.5863 11.7023H44.1114L46.7188 14.5188L49.4103 11.7023H52.0178L48.056 16.0258L52.0178 20.2995H49.2921L46.6846 17.4502L43.9794 20.2995H35.5863V11.7023ZM16.2098 13.1578L14.7544 16.5932H17.6636L16.2098 13.1578ZM37.6915 13.4834V15.0537H42.3423V16.804H37.6915V18.5184H42.9081L45.332 15.9933L43.0109 13.4819H37.6915V13.4834Z"
        fill="#2557D6"
      />
    </svg>
  );
}
