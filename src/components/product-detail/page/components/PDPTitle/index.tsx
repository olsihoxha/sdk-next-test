import Element from './PDPTitle';
import { product } from '@/signals';

function Title() {
  return <Element name={product.value.name} />;
}

export default Title;
