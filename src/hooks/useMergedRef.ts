import { ForwardedRef, MutableRefObject, Ref, useCallback } from 'preact/compat';

const useMergedRef = <T>(...refs: Array<Ref<T> | ForwardedRef<T>>) =>
  useCallback(
    (element: T) => {
      refs.forEach((ref) => {
        if (typeof ref === 'function') (ref as any)(element);
        else if (ref && typeof ref === 'object') (ref as MutableRefObject<T>).current = element;
      });
    },
    [refs],
  );

export default useMergedRef;
