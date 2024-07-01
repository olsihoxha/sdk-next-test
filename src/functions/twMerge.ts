import { extendTailwindMerge } from 'tailwind-merge';

// twMerge from 'tailwind-merge' is not aware of custom tailwind classes that we specify in tailwind config.
// So we create this custom 'twMerge' function to overide the merging behavior.
// Please use this instead of the one inported from 'tailwind-merge'
export const twMerge = extendTailwindMerge({
  override: {
    classGroups: {
      'font-size': [
        'text-2xl',
        'text-xl',
        'text-lg',
        'text-base',
        'text-sm',
        'text-xs',
        'text-xxs',
      ],
    },
  },
});
