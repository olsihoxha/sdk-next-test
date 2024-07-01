import { FC, forwardRef, useEffect, useRef, useState } from 'preact/compat';
import classNames from 'classnames';
import { useMergedRef } from '../../../hooks';
import { ComponentChildren, JSX } from 'preact';

type Ref = HTMLSpanElement;

type Props = {
  style?: object;
  src?: string;
  srcSet?: string;
  alt?: string;
  className?: string;
  shape?: 'rounded' | 'circle' | 'square';
  size?: 'lg' | 'md' | 'sm' | 'xs' | number;
  icon?: string | ComponentChildren;
  children?: ComponentChildren;
  onClick?: JSX.MouseEventHandler<Ref> | undefined;
};

const Avatar: FC<Props> = forwardRef<Ref, Props>((props, ref) => {
  const { size, src, srcSet, shape, alt, className, icon, style, ...rest } = props;

  let { children } = props;
  const [scale, setScale] = useState(1);

  const avatarChildren = useRef<Ref | null>(null);
  const avatarNode = useRef<Ref | null>(null);

  const avatarMergeRef = useMergedRef(ref, avatarNode);

  const innerScale = () => {
    if (!avatarChildren.current || !avatarNode.current) {
      return;
    }
    const avatarChildrenWidth = avatarChildren.current.offsetWidth;
    const avatarNodeWidth = avatarNode.current.offsetWidth;
    if (avatarChildrenWidth === 0 || avatarNodeWidth === 0) {
      return;
    }
    setScale(
      avatarNodeWidth - 8 < avatarChildrenWidth ? (avatarNodeWidth - 8) / avatarChildrenWidth : 1,
    );
  };

  useEffect(() => {
    innerScale();
  }, [scale, children]);

  const sizeStyle =
    typeof size === 'number'
      ? {
          width: size,
          height: size,
          minWidth: size,
          lineHeight: `${size}px`,
          fontSize: icon ? size / 2 : 12,
        }
      : {};

  const classes = classNames(typeof size === 'string' ? `avatar-${size}` : '', className);

  if (src) {
    children = (
      <img
        className={`avatar-img avatar-${shape}`}
        src={src}
        srcSet={srcSet}
        alt={alt}
        loading="lazy"
      />
    );
  } else if (icon) {
    children = <span className={classNames('avatar-icon', `avatar-icon-${size}`)}>{icon}</span>;
  } else {
    const childrenSizeStyle = typeof size === 'number' ? { lineHeight: `${size}px` } : {};
    const stringCentralized = { transform: `translateX(-50%) scale(${scale})` };
    children = (
      <span
        className={`avatar-string ${typeof size === 'number' ? '' : `avatar-inner-${size}`}`}
        style={{
          ...childrenSizeStyle,
          ...stringCentralized,
          ...(typeof size === 'number' ? { height: size } : {}),
        }}
        ref={(node) => {
          avatarChildren.current = node;
        }}
      >
        {children}
      </span>
    );
  }

  return (
    <span className={classes} style={{ ...sizeStyle, ...style }} ref={avatarMergeRef} {...rest}>
      {children}
    </span>
  );
});

export default Avatar;
