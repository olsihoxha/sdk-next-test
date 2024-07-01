import { memo } from 'preact/compat';
import { useStyles } from '../../../../common/context/ThemeContext/ThemeContext';

type PDPTitleProps = {
  name: string;
};

function PDPTitle({ name }: PDPTitleProps) {
  const styles = useStyles();
  return (
    <div
      className="flex justify-start items-center text-inherit mb-6 font-bold"
      style={{
        fontFamily: styles.text.headings.font,
        color: styles.text.headings.color,
      }}
    >
      <div className="text-base md:text-xl sm:text-xl font-bold font-['Open_Sans']">{name}</div>
    </div>
  );
}

export default memo(PDPTitle);
