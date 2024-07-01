import { h } from 'preact';

//TODO: Keep this here till it is decided under which atom should it be or if it will be a standalone atom
export interface IconButtonProps {
  icon: h.JSX.Element;
  onClick: () => void;
}

const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <button onClick={() => onClick?.()} className="border-none bg-none p-0">
      {icon}
    </button>
  );
};

export default IconButton;
