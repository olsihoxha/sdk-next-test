import React from 'preact/compat';

interface FooterProps {
  fontFamily: string;
  primaryColor: string;
  fontColor: string;
}

function Footer({ fontFamily, primaryColor, fontColor }: FooterProps) {
  return (
    <div className="flex w-full h-full justify-between pt-1 px-2 gap-6" style={{ fontFamily }}>
      <div className="flex flex-col font-medium items-start text-start">
        <div
          className="w-max"
          style={{
            fontSize: 10,
            color: fontColor,
            fontFamily,
          }}
        >
          Powered by
        </div>
        <div style={{ fontWeight: '600', fontSize: 16, color: fontColor, fontFamily }}>
          <span>
            liquid<span style={{ color: '#0EA5E9' }}>.</span>
          </span>
        </div>
      </div>
      <div className="font-medium flex items-center justify-center">
        <div
          style={{
            textAlign: 'right',
            fontSize: 10,
            color: fontColor,
            fontFamily,
          }}
        >
          <span>
            Liquid is owned and operated by ReserveBar. For more information, see our&nbsp;
          </span>
          <a
            href="https://www.reservebar.com/privacy-policy.html"
            target="_blank"
            rel="noreferrer"
            style={{ color: primaryColor }}
          >
            Privacy Policy
          </a>
          <span>&bsp;and&nbsp;</span>
          <a
            href="https://www.reservebar.com/terms"
            target="_blank"
            rel="noreferrer"
            style={{ color: primaryColor }}
          >
            Terms & Conditions
          </a>
          <span>.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
