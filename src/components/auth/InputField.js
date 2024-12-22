import React, { useState } from "react";

export const InputField = ({
  icon,
  label,
  value,
  type = "text",
  showEye = false,
  onChange,
}) => {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <div className="flex flex-wrap gap-2.5 items-center p-4 w-full whitespace-nowrap rounded-2xl bg-zinc-100 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-7 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="flex flex-col self-stretch my-auto">
          <label className="text-xs leading-none">{label}</label>
          <input
            type={inputType}
            value={value}
            onChange={onChange}
            className="mt-2 p-1 text-base font-normal bg-zinc-100"
            placeholder={`${label.toLowerCase()}`}
          />
        </div>
      </div>
      {showEye && (
        <img
          loading="lazy"
          src={
            inputType === "password"
              ? "/assets/hidden.png" // Eye-slash icon
              : "/assets/eye.png" // Eye icon
          }
          alt="toggle password visibility"
          onClick={togglePasswordVisibility}
          className="cursor-pointer object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      )}
    </div>
  );
};
