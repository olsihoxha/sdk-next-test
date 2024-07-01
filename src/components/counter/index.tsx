import Element, { CounterProps } from './components/Counter';


const Counter = ({ count, bgColor, textColor }: CounterProps) => {
  return <Element count={count} bgColor={bgColor} textColor={textColor} />;
};



export default Counter;
