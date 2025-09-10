import React from 'react';

export function Button({ children, onClick, className = '', type = 'button', ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#004289] focus:ring-offset-2 bg-[#004289] hover:bg-[#00336b] text-white px-6 py-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
