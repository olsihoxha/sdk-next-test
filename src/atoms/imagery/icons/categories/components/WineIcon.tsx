import { IconProps } from '../../../../cards/CategoryCard/CategoryCard';

export default function WineIcon({ color, size }: IconProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color, width: `${size}px`, height: `${size}px` }}
      viewBox="0 0 50 50"
    >
      <path
        d="M34.4581 17.7742C36.071 19.2839 37 21.4129 37 23.6194V40.7742C37 42.5548 35.5548 44 33.7742 44H26.0323C24.2516 44 22.8065 42.5548 22.8065 40.7742V23.6194C22.8065 21.4129 23.729 19.2839 25.3484 17.7742C26.6258 16.5806 27.3226 15.0323 27.3226 13.4129V7.69677C26.9355 7.47097 26.6774 7.05806 26.6774 6.58065V5.29032C26.6774 4.58065 27.2581 4 27.9677 4H31.8387C32.5484 4 33.129 4.58065 33.129 5.29032V6.58065C33.129 7.05806 32.871 7.47097 32.4839 7.69677V13.4129C32.4839 15.0323 33.1871 16.5806 34.4581 17.7742ZM34.3871 31.0968H35.7097V29.8064H34.3871C34.4129 30.0194 34.4194 30.2323 34.4194 30.4516C34.4194 30.671 34.4129 30.8839 34.3871 31.0968ZM26.0323 42.7097H33.7742C34.8387 42.7097 35.7097 41.8387 35.7097 40.7742V32.3871H34.1548C33.5419 34.6387 31.8645 36.2581 29.9032 36.2581C27.9419 36.2581 26.2645 34.6387 25.6516 32.3871H24.0968V40.7742C24.0968 41.8387 24.9677 42.7097 26.0323 42.7097ZM33.129 30.4516C33.129 27.9613 31.6839 25.9355 29.9032 25.9355C28.1226 25.9355 26.6774 27.9613 26.6774 30.4516C26.6774 32.9419 28.1226 34.9677 29.9032 34.9677C31.6839 34.9677 33.129 32.9419 33.129 30.4516ZM25.4194 29.8064H24.0968V31.0968H25.4194C25.3935 30.8839 25.3871 30.671 25.3871 30.4516C25.3871 30.2323 25.3935 30.0194 25.4194 29.8064ZM31.1935 12.9226V7.87097H28.6129V12.9226C29.4323 13.2839 30.3742 13.2839 31.1935 12.9226ZM31.8387 5.29032H27.9677V6.58065H31.8387V5.29032ZM31.2516 14.271C30.8129 14.4065 30.3548 14.4903 29.9032 14.4903C29.4516 14.4903 28.9935 14.4129 28.5548 14.271C28.3484 15.929 27.5419 17.4839 26.2258 18.7097C24.871 19.9742 24.0968 21.7613 24.0968 23.6129V28.5097H25.6516C26.2645 26.2581 27.9419 24.6387 29.9032 24.6387C31.8645 24.6387 33.5419 26.2581 34.1548 28.5097H35.7097V23.6129C35.7097 21.7613 34.9355 19.9742 33.5806 18.7097C32.2645 17.4839 31.4645 15.929 31.2516 14.271Z"
        fill="currentColor"
      />
      <path
        d="M13.4323 36.0065C11.3935 35.3806 9.9871 33.6516 9.90323 31.6258V31.5484L10.3419 23.9484C10.3935 23.2774 10.9613 22.7548 11.6323 22.7548H18.4968C19.1677 22.7548 19.7355 23.2774 19.7871 23.9613L20.2258 31.6258C20.1419 33.6516 18.7355 35.3806 16.6968 36.0065C16.4645 36.3742 16.1161 36.6516 15.7097 36.7935V40.2387C16.0194 40.3484 16.2903 40.529 16.5097 40.7742H17.3226C18.2129 40.7742 18.9355 41.4968 18.9355 42.3871C18.9355 43.2774 18.2129 44 17.3226 44H12.8065C11.9161 44 11.1936 43.2774 11.1936 42.3871C11.1936 41.4968 11.9161 40.7742 12.8065 40.7742H13.6194C13.8387 40.529 14.1097 40.3419 14.4194 40.2387V36.7935C14.0129 36.6516 13.6645 36.3742 13.4323 36.0065ZM16.1032 34.8323C17.7097 34.4323 18.871 33.0903 18.9355 31.6387L18.9032 31.0968H12.5161V29.8064H18.8323L18.4968 24.0452H11.6323L11.1936 31.5742C11.2581 33.0903 12.4194 34.4323 14.0258 34.8323C14.2258 34.8839 14.3936 35.0258 14.471 35.2129C14.5677 35.4581 14.8 35.6129 15.0645 35.6129C15.329 35.6129 15.5613 35.4581 15.6581 35.2129C15.7355 35.0258 15.9032 34.8839 16.1032 34.8323ZM13.9419 42.0645H12.8065C12.6258 42.0645 12.4839 42.2065 12.4839 42.3871C12.4839 42.5677 12.6258 42.7097 12.8065 42.7097H17.3226C17.5032 42.7097 17.6452 42.5677 17.6452 42.3871C17.6452 42.2065 17.5032 42.0645 17.3226 42.0645H16.1806C15.9484 42.0645 15.7355 41.9419 15.6194 41.7355C15.3935 41.3355 14.7355 41.3355 14.4968 41.7419C14.3806 41.9419 14.1742 42.0645 13.9419 42.0645Z"
        fill="currentColor"
      />
    </svg>
  );
}
