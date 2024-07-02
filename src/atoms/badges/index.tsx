
import Element, { BadgeProps } from './components/Badge';
import * as Heroicons from '@liquidcommerceteam/preact-heroicons';
import { FC, useState, useEffect, JSX } from 'preact/compat';

const Badge: FC<BadgeProps> = ({
  label,
  background,
  color,
  icon,
  iconPosition,
  border,
  borderColor,
  floating,
}) => {
  const [Icon, setIcon] = useState<JSX.IntrinsicElements | FC | null>(null);

  useEffect(() => {
    if (icon !== null) {
      const IconComponent = Heroicons[icon as keyof typeof Heroicons];
      setIcon(() => IconComponent);
    } else {
      setIcon(() => null);
    }
  }, [icon]);

  return (
    <>
      {typeof Icon === 'function' ? (
        <Element
          label={label}
          background={background}
          color={color}
          icon={<Icon />}
          iconPosition={iconPosition}
          border={border}
          borderColor={borderColor}
          floating={floating}
        />
      ) : (
        <Element
          label={label}
          background={background}
          color={color}
          icon={icon}
          iconPosition={iconPosition}
          border={border}
          borderColor={borderColor}
          floating={floating}
        />
      )}
    </>
  );
};



export default Badge;
