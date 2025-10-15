import { ComponentPropsWithoutRef, ElementType } from 'react';
import clsx from 'clsx';

type StackProps<T extends ElementType> = {
  as?: T;
  direction?: 'row' | 'column';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between';
} & ComponentPropsWithoutRef<T>;

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch'
} as const;

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between'
} as const;

const gapMap = {
  xs: 'gap-[var(--space-xs)]',
  sm: 'gap-[var(--space-sm)]',
  md: 'gap-[var(--space-md)]',
  lg: 'gap-[var(--space-lg)]',
  xl: 'gap-[var(--space-xl)]'
} as const;

export function Stack<T extends ElementType = 'div'>({
  as,
  direction = 'row',
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  className,
  ...props
}: StackProps<T>) {
  const Component = as ?? 'div';

  return (
    <Component
      className={clsx(
        'flex',
        direction === 'column' ? 'flex-col' : 'flex-row',
        gapMap[gap],
        alignMap[align],
        justifyMap[justify],
        className
      )}
      {...props}
    />
  );
}
