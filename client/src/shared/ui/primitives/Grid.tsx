import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

const columnsMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4'
} as const;

const gapMap = {
  xs: 'gap-[var(--space-xs)]',
  sm: 'gap-[var(--space-sm)]',
  md: 'gap-[var(--space-md)]',
  lg: 'gap-[var(--space-lg)]'
} as const;

type GridProps = ComponentPropsWithoutRef<'div'> & {
  columns?: keyof typeof columnsMap;
  gap?: keyof typeof gapMap;
};

export function Grid({ columns = 1, gap = 'md', className, ...props }: GridProps) {
  return (
    <div
      className={clsx(
        'grid auto-rows-fr',
        columnsMap[columns],
        gapMap[gap],
        'md:grid-cols-[repeat(auto-fit,minmax(min(18rem,100%),1fr))]',
        className
      )}
      {...props}
    />
  );
}
