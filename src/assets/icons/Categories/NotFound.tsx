import { IconProps } from '../../../atoms/cards/CategoryCard/CategoryCard';

export default function NotFoundIcon({ color, size }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      style={{
        color,
        width: `${size}px`,
        height: `${size}px`,
      }}
      fill="none"
    >
      <circle cx="24" cy="24" r="20" fill="skyblue" />
      <rect x="10" y="10" width="28" height="28" fill="orange" />
    </svg>
  );
}
