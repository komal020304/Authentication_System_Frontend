import * as React from "react";

export const SocialLoginButton = ({ icon, text }) => {
  return (
    <div className="flex flex-col justify-center px-60 py-6 w-full bg-white rounded-2xl border border-solid border-neutral-200 min-h-[78px] shadow-[0px_4px_14px_rgba(0,0,0,0.05)] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3 items-center">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
        />
        <div className="self-stretch my-auto">{text}</div>
      </div>
    </div>
  );
};
