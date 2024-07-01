import { FC } from 'preact/compat';

export interface ImageProps {
  imgSrc: string;
  size: string;
}

const ImageWrapper: FC<ImageProps> = ({ imgSrc, size }: ImageProps) => {
  return <img src={imgSrc} className="m-auto" style={{ height: `${size}px` }} />;
};

export default ImageWrapper;
