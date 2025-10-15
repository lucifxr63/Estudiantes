import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

export function Container({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={clsx('mx-auto w-full max-w-7xl px-sm', className)} {...props} />;
}
