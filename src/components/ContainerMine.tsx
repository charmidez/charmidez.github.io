
// src/components/Container.tsx

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'row' | 'column';
}

const ContainerMine = ({ children, className = '', direction ='row' } : ContainerProps) => {
  return (
    <div className={`max-w-7xl mx-auto p-2 flex ${direction === 'row' ? 'flex-row' : 'flex-col'} ${className}`}>
      {children}
    </div>
  );
};

export default ContainerMine;
