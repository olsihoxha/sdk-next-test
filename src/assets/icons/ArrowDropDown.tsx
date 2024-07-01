interface ArrowDropDownProps {
  style?: string;
  className?: string;
}

export default function ArrowDropDown({ style, className }: ArrowDropDownProps) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <mask id="mask0_5110_2997" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
        <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_5110_2997)">
        <path
          d="M9.60384 12.1042L6.64303 9.14179C6.60218 9.10095 6.57155 9.05668 6.55113 9.009C6.53072 8.96133 6.52051 8.91319 6.52051 8.86458C6.52051 8.76736 6.55488 8.68229 6.62363 8.60938C6.69238 8.53646 6.78301 8.5 6.89551 8.5H13.1038C13.2163 8.5 13.307 8.5375 13.3757 8.6125C13.4445 8.6875 13.4788 8.775 13.4788 8.875C13.4788 8.88889 13.438 8.97758 13.3563 9.14106L10.3955 12.1042C10.34 12.1597 10.2775 12.2014 10.208 12.2292C10.1386 12.2569 10.0691 12.2708 9.99967 12.2708C9.93023 12.2708 9.86079 12.2569 9.79134 12.2292C9.7219 12.2014 9.6594 12.1597 9.60384 12.1042Z"
          fill="#1A56DB"
        />
      </g>
    </svg>
  );
}
