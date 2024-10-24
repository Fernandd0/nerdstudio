import React from "react";

interface InputProps {
  type: string;
  id: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({ type, id, placeholder }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        type={type}
        id={id}
        className="w-full border-b-[1.5px] border-gray-400 outline-none px-1 text-gray-600 placeholder:text-gray-400 focus:border-black"
        placeholder={placeholder}
      />
    </div>
  );
};
