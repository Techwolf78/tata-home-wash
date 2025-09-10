import React from 'react';

export function Button({ children, onClick, className = '', type = 'button', ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
