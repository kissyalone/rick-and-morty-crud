import React from 'react';

export default ({ onDelete, children }) => (
  <button
    className="bg-red-900 inline-flex items-center px-4 py-2 border border-transparent text-xs text-white tracking-widest active:bg-gray-900 transition ease-in-out"
    type="button"
    onClick={onDelete}
  >
    {children}
  </button>
);
