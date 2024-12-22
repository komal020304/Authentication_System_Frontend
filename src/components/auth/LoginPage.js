import * as React from "react";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  return (
    <div className="p-4">
      <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-20 py-2 max-md:px-5">
        <img
          loading="lazy"
          src="/assets/Poster.jpg"
          alt="Login illustration"
          className="object-left-top self-stretch my-auto aspect-square min-w-[240px] w-[500px] max-md:max-w-full"
        />
        <LoginForm />
      </div>
    </div>
  );
};
