import React from 'react';

export default function FormInput({ id, label, type, value, onChange }) {
  const baseClasses = "w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div>
      <label htmlFor={id} className="block text-white mb-2">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          rows="4"
          className={baseClasses}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className={baseClasses}
        />
      )}
    </div>
  );
}