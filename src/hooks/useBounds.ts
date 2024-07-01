import { useCallback, useEffect, useMemo, useState } from 'preact/compat';
import { Ref } from 'preact';

type BoundType = {
  readonly bottom: number;
  readonly height: number;
  readonly left: number;
  readonly right: number;
  readonly top: number;
  readonly width: number;
  readonly x: number;
  readonly y: number;
};

function useBounds() {
  const [bounds, setBounds] = useState<BoundType | undefined>();
  const [node, setNode] = useState<HTMLElement>(null);

  const ref: Ref<HTMLElement> = useCallback((currentNode: HTMLElement) => {
    setNode(currentNode);
  }, []);

  useEffect(() => {
    if (node) {
      const getBounds = () =>
        window.requestAnimationFrame(() => {
          if (typeof node === 'object' && typeof node.getBoundingClientRect === 'function') {
            const nodeBounds = node.getBoundingClientRect().toJSON();
            setBounds(nodeBounds);
          }
        });

      getBounds();

      window.addEventListener('resize', getBounds, { passive: true });
      window.addEventListener('scroll', getBounds, { passive: true });

      return () => {
        window.removeEventListener('resize', getBounds);
        window.removeEventListener('scroll', getBounds);
      };
    }
  }, [node]);

  return useMemo(
    () => ({
      node,
      ref,
      ...bounds,
    }),
    [node, ref, bounds],
  );
}

export default useBounds;
