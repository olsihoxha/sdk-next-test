import { useState } from 'preact/compat';
import { IllustrationProps } from './TrackOrderIllustration';

export default function ThankyouIllustration({
  color,
  size,
  primaryColor,
  accentColor,
  highlightColor,
}: IllustrationProps) {
  const [fillPrimaryColor] = useState(primaryColor);
  const [fillAccentColor] = useState(accentColor);
  const [fillHighlightColor] = useState(highlightColor);

  return (
    <svg
      width={size}
      viewBox="0 0 72 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        color,
        maxWidth: '100%',
        maxHeight: 'auto',
      }}
    >
      <path
        d="M72 36C72 46.063 67.8817 55.1339 61.2781 61.6535C54.8166 68.1024 45.8698 72 36 72C26.2012 72 17.2544 68.0315 10.7219 61.6535C4.11834 55.1339 0 46.063 0 36C0 16.0866 16.1183 0 36 0C55.8817 0 72 16.1575 72 36Z"
        fill={fillHighlightColor}
      />
      <path
        d="M60.8768 18V61.9925C54.5021 68.3672 45.6756 72.22 35.9384 72.22C26.2713 72.22 17.4448 68.2971 11 61.9925V18H60.8768Z"
        fill="white"
      />
      <path
        d="M37.0769 40.4544L27.3187 30.6963L24 34.015L33.7581 43.7731L37.0769 40.4544Z"
        fill={fillPrimaryColor}
      />
      <path
        d="M45.0802 25.8452L30.5173 40.4081L33.8361 43.7268L48.399 29.1639L45.0802 25.8452Z"
        fill={fillPrimaryColor}
      />
      <g opacity="0.5">
        <path d="M48.4988 47.7338H23V50.9562H48.4988V47.7338Z" fill={fillAccentColor} />
        <path d="M48.4988 54.809H23V58.0314H48.4988V54.809Z" fill={fillAccentColor} />
        <path d="M42.2644 61.9542H29.2348V65.1766H42.2644V61.9542Z" fill={fillAccentColor} />
      </g>
    </svg>
  );
}
