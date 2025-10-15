import { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, className, id, ...props }, ref) => {
    const inputId = id ?? props.name;

    return (
      <div className="space-y-xs">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-foreground/80">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={clsx(
            'w-full rounded-md border border-foreground/10 bg-background px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40',
            className
          )}
          {...props}
        />
        {helperText && <p className="text-xs text-foreground/60">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
