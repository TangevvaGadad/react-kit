import React, { forwardRef, useState } from 'react';
import { Eye, EyeOff, X, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'flex w-full rounded-md border transition-colors duration-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        filled: 'bg-muted border-transparent hover:bg-muted/80 focus:bg-background focus:border-border',
        outlined: 'bg-background border-border hover:border-muted-foreground focus:border-primary',
        ghost: 'border-transparent bg-transparent hover:bg-muted/50 focus:bg-muted/30 focus:border-border'
      },
      size: {
        sm: 'h-8 px-3 py-1 text-sm',
        md: 'h-10 px-3 py-2',
        lg: 'h-12 px-4 py-3 text-lg'
      },
      state: {
        default: '',
        invalid: 'border-destructive focus:border-destructive focus:ring-destructive',
        valid: 'border-success focus:border-success focus:ring-success'
      }
    },
    defaultVariants: {
      variant: 'outlined',
      size: 'md',
      state: 'default'
    }
  }
);

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      state: {
        default: 'text-foreground',
        invalid: 'text-destructive',
        valid: 'text-success'
      }
    },
    defaultVariants: {
      state: 'default'
    }
  }
);

export interface InputFieldProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, 
         VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  loading?: boolean;
  clearable?: boolean;
  showPasswordToggle?: boolean;
  onClear?: () => void;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({
    className,
    variant,
    size,
    state,
    label,
    helperText,
    errorMessage,
    loading,
    clearable,
    showPasswordToggle,
    onClear,
    type = 'text',
    value,
    disabled,
    ...props
  }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    
    const actualType = showPasswordToggle && showPassword ? 'text' : type;
    const actualState = errorMessage ? 'invalid' : state;
    const hasValue = value !== undefined && value !== '';

    const handleClear = () => {
      if (onClear) {
        onClear();
      }
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="w-full space-y-2">
        {label && (
          <label 
            className={cn(labelVariants({ state: actualState }))}
            htmlFor={props.id}
          >
            {label}
            {props.required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          <input
            type={actualType}
            className={cn(
              inputVariants({ variant, size, state: actualState }),
              (loading || clearable || showPasswordToggle) && 'pr-10',
              (clearable && showPasswordToggle) && 'pr-16',
              className
            )}
            ref={ref}
            value={value}
            disabled={disabled || loading}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
          
          {/* Loading spinner */}
          {loading && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
            </div>
          )}
          
          {/* Clear button */}
          {!loading && clearable && hasValue && (
            <button
              type="button"
              onClick={handleClear}
              className={cn(
                "absolute top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors",
                showPasswordToggle ? "right-8" : "right-2"
              )}
              disabled={disabled}
              tabIndex={-1}
            >
              <X className="h-3 w-3" />
            </button>
          )}
          
          {/* Password toggle */}
          {!loading && showPasswordToggle && type === 'password' && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors"
              disabled={disabled}
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
        
        {/* Helper text or error message */}
        {(helperText || errorMessage) && (
          <p className={cn(
            "text-xs",
            errorMessage ? "text-destructive" : "text-muted-foreground"
          )}>
            {errorMessage || helperText}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export { InputField, inputVariants };