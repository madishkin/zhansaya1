
import React from 'react';

interface OrnamentProps {
  className?: string;
}

const KazakhOrnament = ({ className = "" }: OrnamentProps) => {
  return (
    <div className={`ornament-divider my-8 ${className}`}></div>
  );
};

export default KazakhOrnament;
