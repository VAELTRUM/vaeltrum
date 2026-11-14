import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const baseStyles = 
    'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed group';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-md gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2',
    lg: 'text-base px-6 py-3.5 rounded-xl gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-foreground text-background hover:opacity-90 active:opacity-95 font-semibold shadow-sm hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_24px_rgba(247,247,245,0.18)]',
    secondary:
      'bg-background-card hover:bg-background-cardHover text-foreground border border-border hover:border-border-focus active:bg-background-elevated shadow-sm',
    ghost:
      'text-foreground-muted hover:text-foreground hover:bg-foreground/[0.05] active:bg-foreground/[0.08]',
    outline:
      'border border-border/80 hover:border-accent-blue/70 text-foreground bg-transparent hover:bg-accent-blue/[0.05]',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
};
