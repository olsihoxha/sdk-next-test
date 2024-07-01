import { IllustrationProps } from '@/atoms/imagery/icons/illustrations/components/TrackOrderIllustration';
import { useEffect, useState } from 'preact/compat';

export default function Card({ color, size, highlightColor }: IllustrationProps) {
  const [fillColor] = useState(color);
  const [strokeColor, setStrokeColor] = useState(highlightColor);

  useEffect(() => {
    if (highlightColor) {
      setStrokeColor(highlightColor);
    }
  }, [highlightColor]);

  return (
    <svg
      viewBox="0 0 72 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: `${size}px` }}
    >
      <rect x="0.5" y="0.5" width="71" height="47" rx="7.5" fill={fillColor} />
      <rect x="0.5" y="0.5" width="71" height="47" rx="7.5" stroke={strokeColor} />
      <path
        d="M13 18C12.4696 18 11.9609 18.2107 11.5858 18.5858C11.2107 18.9609 11 19.4696 11 20V21H27V20C27 19.4696 26.7893 18.9609 26.4142 18.5858C26.0391 18.2107 25.5304 18 25 18H13Z"
        fill="#111928"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27 23H11V28C11 28.5304 11.2107 29.0391 11.5858 29.4142C11.9609 29.7893 12.4696 30 13 30H25C25.5304 30 26.0391 29.7893 26.4142 29.4142C26.7893 29.0391 27 28.5304 27 28V23ZM13 27C13 26.7348 13.1054 26.4804 13.2929 26.2929C13.4804 26.1054 13.7348 26 14 26H15C15.2652 26 15.5196 26.1054 15.7071 26.2929C15.8946 26.4804 16 26.7348 16 27C16 27.2652 15.8946 27.5196 15.7071 27.7071C15.5196 27.8946 15.2652 28 15 28H14C13.7348 28 13.4804 27.8946 13.2929 27.7071C13.1054 27.5196 13 27.2652 13 27ZM18 26C17.7348 26 17.4804 26.1054 17.2929 26.2929C17.1054 26.4804 17 26.7348 17 27C17 27.2652 17.1054 27.5196 17.2929 27.7071C17.4804 27.8946 17.7348 28 18 28H19C19.2652 28 19.5196 27.8946 19.7071 27.7071C19.8946 27.5196 20 27.2652 20 27C20 26.7348 19.8946 26.4804 19.7071 26.2929C19.5196 26.1054 19.2652 26 19 26H18Z"
        fill="#111928"
      />
      <path
        d="M35.7402 21.8984C35.4668 21.8984 35.2227 21.957 35.0078 22.0742C34.793 22.1875 34.6094 22.3535 34.457 22.5723C34.3047 22.791 34.1875 23.0586 34.1055 23.375C34.0273 23.6875 33.9883 24.043 33.9883 24.4414C33.9883 24.9805 34.0566 25.4336 34.1934 25.8008C34.3301 26.168 34.5371 26.4453 34.8145 26.6328C35.0957 26.8203 35.4473 26.9141 35.8691 26.9141C36.252 26.9141 36.6191 26.8613 36.9707 26.7559C37.3262 26.6504 37.6836 26.5234 38.043 26.375V28.332C37.6641 28.5 37.2754 28.6211 36.877 28.6953C36.4824 28.7695 36.0625 28.8066 35.6172 28.8066C34.6875 28.8066 33.9258 28.623 33.332 28.2559C32.7422 27.8848 32.3066 27.3711 32.0254 26.7148C31.748 26.0586 31.6094 25.2969 31.6094 24.4297C31.6094 23.7812 31.6992 23.1875 31.8789 22.6484C32.0625 22.1094 32.3301 21.6426 32.6816 21.248C33.0332 20.8496 33.4668 20.543 33.9824 20.3281C34.502 20.1094 35.0957 20 35.7637 20C36.1777 20 36.6133 20.0488 37.0703 20.1465C37.5312 20.2402 37.9805 20.3926 38.418 20.6035L37.709 22.4258C37.3965 22.2773 37.0801 22.1523 36.7598 22.0508C36.4395 21.9492 36.0996 21.8984 35.7402 21.8984Z"
        fill="black"
      />
      <path
        d="M44.9746 28.6895L44.5527 27.084H41.7695L41.3359 28.6895H38.793L41.5879 20.0879H44.6758L47.5059 28.6895H44.9746ZM44.0723 25.1855L43.7031 23.7793C43.6641 23.627 43.6074 23.4102 43.5332 23.1289C43.459 22.8438 43.3848 22.5508 43.3105 22.25C43.2402 21.9453 43.1855 21.6953 43.1465 21.5C43.1113 21.6953 43.0605 21.9375 42.9941 22.2266C42.9316 22.5117 42.8652 22.7949 42.7949 23.0762C42.7285 23.3574 42.6699 23.5918 42.6191 23.7793L42.25 25.1855H44.0723Z"
        fill="black"
      />
      <path
        d="M51.2441 20.123C52.0215 20.123 52.668 20.2188 53.1836 20.4102C53.6992 20.5977 54.0859 20.8789 54.3438 21.2539C54.6055 21.6289 54.7363 22.0957 54.7363 22.6543C54.7363 23.002 54.6777 23.3184 54.5605 23.6035C54.4434 23.8887 54.2754 24.1445 54.0566 24.3711C53.8418 24.5938 53.584 24.7891 53.2832 24.957L55.7793 28.6895H53.1543L51.3379 25.5723H50.752V28.6895H48.4375V20.123H51.2441ZM51.209 21.875H50.752V23.832H51.1855C51.541 23.832 51.832 23.7539 52.0586 23.5977C52.2852 23.4414 52.3984 23.1621 52.3984 22.7598C52.3984 22.4824 52.3047 22.2656 52.1172 22.1094C51.9297 21.9531 51.627 21.875 51.209 21.875Z"
        fill="black"
      />
      <path
        d="M63.8301 24.2246C63.8301 25.2207 63.6445 26.0488 63.2734 26.709C62.9023 27.3691 62.3789 27.8652 61.7031 28.1973C61.0312 28.5254 60.2402 28.6895 59.3301 28.6895H56.5586V20.123H59.5234C60.4453 20.123 61.2266 20.2812 61.8672 20.5977C62.5078 20.9141 62.9941 21.377 63.3262 21.9863C63.6621 22.5957 63.8301 23.3418 63.8301 24.2246ZM61.4277 24.3066C61.4277 23.7871 61.3574 23.3574 61.2168 23.0176C61.0801 22.6738 60.873 22.418 60.5957 22.25C60.3184 22.0781 59.9688 21.9922 59.5469 21.9922H58.873V26.791H59.3887C60.0918 26.791 60.6074 26.5879 60.9355 26.1816C61.2637 25.7715 61.4277 25.1465 61.4277 24.3066Z"
        fill="black"
      />
    </svg>
  );
}