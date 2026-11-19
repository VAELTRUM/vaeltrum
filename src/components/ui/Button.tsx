import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'gradient';
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
    sm: 'text-xs px-3.5 py-1.5 rounded-full gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-full gap-2',
    lg: 'text-base px-6 py-3.5 rounded-2xl gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 font-semibold shadow-sm hover:shadow-md',
    gradient:
      'bg-gradient-to-r from-[#FF7A59] via-[#FA709A] to-[#8B5CF6] text-white font-semibold shadow-sm hover:shadow-glow-coral hover:opacity-95 active:scale-[0.98]',
    secondary:
      'bg-slate-900/[0.04] dark:bg-white/[0.06] hover:bg-slate-900/[0.08] dark:hover:bg-white/[0.1] text-slate-900 dark:text-white border border-slate-900/[0.08] dark:border-white/[0.1] shadow-sm',
    ghost:
      'text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/[0.04] dark:hover:bg-white/[0.06]',
    outline:
      'border border-slate-900/[0.15] dark:border-white/[0.15] hover:border-accent-blue dark:hover:border-accent-blue text-slate-900 dark:text-white bg-transparent',
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
