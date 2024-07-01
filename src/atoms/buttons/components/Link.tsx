//TODO: Keep this here till it is decided under which atom should it be or if it will be a standalone atom
export interface LinkProps {
  label: string;
  onClick: () => void;
}

const Link = ({ label, onClick }: LinkProps) => {
  return (
    <a
      className="text-xs font-normal sm:text-sm text-primary hover:cursor-pointer"
      onClick={() => onClick?.()}
    >
      {label}
    </a>
  );
};

export default Link;
