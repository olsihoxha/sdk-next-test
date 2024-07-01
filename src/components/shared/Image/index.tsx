import { useState } from 'preact/hooks';
import { HTMLAttributes, memo } from 'preact/compat';

function Image(props: HTMLAttributes<HTMLImageElement>) {
  const [objectFitClass, setObjectFitClass] = useState('object-cover');
  const handleImageLoad = (e: any) => {
    const img = e.target;
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    setObjectFitClass(aspectRatio > 0.7 ? 'object-cover' : 'object-contain');
  };
  const cleanClassName = props.className
    ?.toString()
    .replace(/object-(contain|cover)/g, '')
    .trim();
  return (
    <img
      {...props}
      alt={props.alt}
      onLoad={handleImageLoad}
      className={`${cleanClassName} ${objectFitClass}`}
    />
  );
}

export default memo(Image);
