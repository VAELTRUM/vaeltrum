import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
}) => {
  const maxSizes = {
    narrow: 'max-w-4xl',
    default: 'max-w-[1560px]',
    wide: 'max-w-[1720px]',
    full: 'max-w-full',
  };

  return (
    <div className={`mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-24 ${maxSizes[size]} ${className}`}>
      {children}
    </div>
  );
};
