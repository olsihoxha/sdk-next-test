import { ComponentChildren } from 'preact';
import { useEffect, useState } from 'preact/compat';
import tippy, { Placement } from 'tippy.js';
import { MutableRef } from 'preact/hooks';

interface PopoverProps {
  children: ComponentChildren;
  contentRef: MutableRef<HTMLElement>;
  onClose: () => void;
  open?: boolean;
  placement?: string;
  triggerTarget: HTMLElement;
}

function Popover(props: PopoverProps) {
  const { children, contentRef, onClose, open, placement, triggerTarget } = props;
  const [tippyInstance, setTippyInstance] = useState(null);

  useEffect(() => {
    if (tippyInstance) {
      open ? tippyInstance.show() : tippyInstance.hide();
    }
  }, [open, tippyInstance]);

  useEffect(() => {
    if (triggerTarget) {
      const instance = tippy(triggerTarget, {
        allowHTML: true,
        content() {
          return contentRef.current;
        },
        duration: 0,
        hideOnClick: 'toggle',
        interactive: true,
        maxWidth: '90vw',
        onHide() {
          onClose();
        },
        placement: (placement as Placement) || 'auto',
        trigger: 'click',
      });
      setTippyInstance(instance);
    }
    return () => {
      if (tippyInstance) {
        tippyInstance.destroy();
      }
    };
  }, [contentRef, onClose, placement, tippyInstance, triggerTarget]);

  return <>{children}</>;
}

export default Popover;
