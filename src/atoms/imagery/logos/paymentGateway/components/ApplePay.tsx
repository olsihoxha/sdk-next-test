import { IllustrationProps } from '@/atoms/imagery/icons/illustrations/components/TrackOrderIllustration';
import { useState } from 'preact/compat';

export default function ApplePay({ color, size }: IllustrationProps) {
  const [fillColor] = useState(color);

  return (
    <svg
      viewBox="0 0 72 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: `${size}px` }}
    >
      <rect width="72" height="48" rx="8" fill={fillColor} />
      <path
        d="M20.9106 16.5791C21.4656 15.8848 21.8423 14.9526 21.743 14C20.9304 14.0404 19.9388 14.5361 19.3648 15.2309C18.8493 15.8259 18.3931 16.7972 18.512 17.7098C19.4242 17.789 20.3355 17.2539 20.9106 16.5791Z"
        fill="white"
      />
      <path
        d="M21.7326 17.8881C20.408 17.8092 19.2817 18.6399 18.6491 18.6399C18.0162 18.6399 17.0475 17.9278 15.9998 17.947C14.6361 17.967 13.3708 18.7381 12.6788 19.9644C11.2554 22.4176 12.3032 26.0566 13.6873 28.0546C14.3595 29.043 15.1695 30.1314 16.2369 30.0923C17.2454 30.0527 17.6407 29.4393 18.8666 29.4393C20.0916 29.4393 20.4476 30.0923 21.5152 30.0725C22.6223 30.0527 23.3144 29.0836 23.9866 28.0941C24.7577 26.9673 25.0733 25.8793 25.0932 25.8196C25.0733 25.7998 22.9584 24.9884 22.9388 22.5556C22.9188 20.5186 24.5992 19.5497 24.6783 19.4896C23.7294 18.0861 22.2467 17.9278 21.7326 17.8881Z"
        fill="white"
      />
      <path
        d="M33.2665 15.1313C36.1456 15.1313 38.1504 17.1158 38.1504 20.0052C38.1504 22.905 36.1044 24.8998 33.1943 24.8998H30.0066V29.9692H27.7035V15.1313L33.2665 15.1313ZM30.0066 22.9666H32.6493C34.6545 22.9666 35.7957 21.8871 35.7957 20.0155C35.7957 18.1442 34.6545 17.0748 32.6596 17.0748H30.0066V22.9666Z"
        fill="white"
      />
      <path
        d="M38.7521 26.8947C38.7521 25.0026 40.202 23.8407 42.7729 23.6967L45.7341 23.522V22.6891C45.7341 21.486 44.9217 20.7662 43.5646 20.7662C42.279 20.7662 41.4769 21.3831 41.2817 22.3498H39.1841C39.3075 20.3959 40.9731 18.9564 43.6467 18.9564C46.2688 18.9564 47.9447 20.3446 47.9447 22.5142V29.9692H45.8162V28.1903H45.765C45.1378 29.3934 43.7701 30.1542 42.3512 30.1542C40.2329 30.1542 38.7521 28.838 38.7521 26.8947ZM45.7341 25.9179V25.0644L43.0708 25.2289C41.7443 25.3215 40.9938 25.9076 40.9938 26.833C40.9938 27.7789 41.7752 28.3959 42.968 28.3959C44.5206 28.3959 45.7341 27.3265 45.7341 25.9179Z"
        fill="white"
      />
      <path
        d="M49.9543 33.9486V32.1491C50.1185 32.1902 50.4886 32.1902 50.6739 32.1902C51.7021 32.1902 52.2574 31.7584 52.5966 30.6479C52.5966 30.6272 52.7921 29.9898 52.7921 29.9795L48.8849 19.1517H51.2907L54.0262 27.9538H54.0671L56.8025 19.1517H59.1469L55.0952 30.5346C54.1702 33.1569 53.1007 34 50.8591 34C50.6739 34 50.1185 33.9794 49.9543 33.9486Z"
        fill="white"
      />
    </svg>
  );
}