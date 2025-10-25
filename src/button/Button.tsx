import * as React from 'react';
import './button.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        data-variant={variant}
        className={`ui-btn ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';