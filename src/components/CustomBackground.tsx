import React from 'react';

const CustomBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-kazakh-cream relative overflow-hidden">
      <div className="ornament opacity-10 fixed inset-0 w-full h-full -z-10"></div>
      <div className="container max-w-4xl mx-auto pt-6 md:pt-10 pb-10 md:pb-16 px-4 relative z-10">
        {children}
      </div>
    </div>
  );
};

export default CustomBackground;
