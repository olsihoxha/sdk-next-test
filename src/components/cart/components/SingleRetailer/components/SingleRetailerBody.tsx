import { FunctionalComponent } from 'preact';
import RetailCartItem from './RetailCartItem';
import { SingleRetailerBodyProps } from '@/build-types';
import { cart, getTheme } from '@/signals';

const SingleRetailerBody: FunctionalComponent<SingleRetailerBodyProps> = ({
  readOnly,
  retailerId,
}) => {
  const { singleRetailer } = getTheme().cart;

  const items = cart?.value?.items?.filter((el) => el.retailerId === retailerId);

  return (
    <div className={singleRetailer.wrapper.main}>
      {items &&
        items.map((item) => (
          <RetailCartItem key={item.id} item={item} retailerId={retailerId} readOnly={readOnly} />
        ))}
    </div>
  );
};

export default SingleRetailerBody;
