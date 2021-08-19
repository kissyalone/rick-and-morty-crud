import React from 'react';

export default function ButtonMenu({ type = 'submit', className = '', processing, children }) {
    return (
        <button
            type={type}
            className={
                `bg-gray-300 inline-flex items-center px-4 py-2 border border-transparent text-xs text-black tracking-widest rounded-md font-bold  ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
