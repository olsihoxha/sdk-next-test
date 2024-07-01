import { useContext } from 'preact/compat';
import { AppContext, IAppContext } from '../AppContext';

export function useAppContext(): IAppContext | undefined {
  const context = useContext(AppContext);
  return context;
}
