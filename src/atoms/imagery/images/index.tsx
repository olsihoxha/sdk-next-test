import { FC } from 'preact/compat';
import Element, { ImageProps } from './ImageWrapper';


const ImageWrapper: FC<ImageProps> = ({ imgSrc, size }) => {
  return <Element imgSrc={imgSrc} size={size} />;
};

export default ImageWrapper;
