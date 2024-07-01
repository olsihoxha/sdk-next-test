import { FunctionalComponent } from 'preact';
import MulticartHeader from '../MultiCartHeader';
import CartFooter from '../CartFooter';
import { SingleRetailerBody } from './components';
import Subtotal from '../Subtotal';
import { getTheme, selectedRetailerId } from '@/signals';

interface SingleRetailerProps {
  closeDialogCart?: () => void;
}

const SingleRetailer: FunctionalComponent<SingleRetailerProps> = ({ closeDialogCart }) => {
  const { singleRetailer } = getTheme().cart;

  return (
    <div className={singleRetailer.wrapper.height}>
      <MulticartHeader />
      <div className={singleRetailer.wrapper.scroll}>
        <SingleRetailerBody retailerId={selectedRetailerId.value} />
      </div>
      <div className={singleRetailer.wrapper.sticky}>
        <Subtotal showPromo={true} closeDialogCart={closeDialogCart} />
        <CartFooter withNoPaddingTop />
      </div>
    </div>
  );
};

export default SingleRetailer;
