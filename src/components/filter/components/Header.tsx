import CheckIcon from '@/assets/icons/CheckIcon';
import { FC } from 'preact/compat';

const Header: FC<{ onReset: () => void; onSubmit: (event) => void }> = ({ onReset, onSubmit }) => {
  return (
    <header className="w-screen absolute top-0  left-0 flex px-4 py-2 justify-between items-center self-stretch font-['Open Sans'] bg-gray-50">
      <button
        type="reset"
        onClick={onReset}
        className="text-blue-700 text-sm font-semibold leading-[21px]"
      >
        Reset
      </button>
      <p className="text-gray-900 text-base font-bold leading-normal">Refine By</p>
      <button
        onClick={onSubmit}
        className="flex items-center text-blue-700 text-sm font-semibold leading-[21px]"
      >
        <div className="ml-2">
          <CheckIcon />
        </div>
        Apply
      </button>
    </header>
  );
};

export default Header;
