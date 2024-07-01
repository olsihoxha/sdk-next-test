import { FC } from 'preact/compat';
import classNames from 'classnames';
import { getTheme } from '@/signals';

interface CartFooterProps {
  withNoPaddingTop?: boolean;
  className?: string;
}

const CartFooter: FC<CartFooterProps> = ({ withNoPaddingTop = false, className }) => {
  const { footer } = getTheme().cart;

  return (
    <div
      className={classNames(footer.wrapper.main, className, {
        [footer.wrapper.wrapperWithoutTopPadding]: withNoPaddingTop,
      })}
    >
      <div className={footer.wrapper.sub}>
        <div className={footer.wrapper.poweredByWrapper}>
          <p className={footer.text.powered}>Powered by</p>
          <p className={footer.text.liquid.text}>
            liquid
            <span className={footer.text.liquid.dot}>.</span>
          </p>
        </div>
        <p className={footer.text.information.text}>
          Liquid is owned and operated by ReserveBar. For more information, see our&nbsp;
          <a
            href="https://www.reservebar.com/privacy-policy.html"
            target="_blank"
            rel="noreferrer"
            className={footer.text.information.color}
          >
            Privacy Policy
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://www.reservebar.com/terms"
            target="_blank"
            rel="noreferrer"
            className={footer.text.information.color}
          >
            Terms & Conditions
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default CartFooter;
