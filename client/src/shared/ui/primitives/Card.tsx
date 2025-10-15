import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

export function Card({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        'rounded-lg border border-foreground/10 bg-background/80 p-md shadow-sm backdrop-blur-sm supports-[backdrop-filter]:bg-background/60',
        className
      )}
      {...props}
    />
  );
}
