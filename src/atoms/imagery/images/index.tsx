import { FC } from 'preact/compat';
import Element, { ImageProps } from './ImageWrapper';
import register from '@/register';

const ImageWrapper: FC<ImageProps> = ({ imgSrc, size }) => {
  return <Element imgSrc={imgSrc} size={size} />;
};

register(ImageWrapper, 'liquid-image-wrapper', ['imgSrc', 'size'], { shadow: true });

export default ImageWrapper;
