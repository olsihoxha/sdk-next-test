import { ComponentChildren, FunctionComponent } from 'preact';

interface TitleProps {
  title: string;
  children?: ComponentChildren;
  className?: string;
  textClassName?: string;
}

const Title: FunctionComponent<TitleProps> = ({ title, children, className, textClassName }) => {
  return (
    <div className={`flex justify-between items-center ${className ?? ''}`}>
      <div className={`text-lg font-extrabold ${textClassName ?? ''}`}>{title}</div>
      {children}
    </div>
  );
};

export default Title;
