import React, { useState, useEffect } from "react";
import { SocialLoginButton } from "./SocialLoginButton";
import { InputField } from "./InputField";
import { useNavigate } from "react-router-dom";

const socialLogins = [
  {
    icon: "/assets/google-icon.png", // Local image path
    text: "Login with Google",
  },
  {
    icon: "/assets/facebook-icon.png", // Local image path
    text: "Login with Facebook",
  },
];

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Redirect logged-in users to the main page
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/home");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (username !== "emilys") {
      setError("Username must be 'emilys'.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Simulate successful login by storing data in localStorage
    const userData = {
      username,
      email,
      token: "dummy-auth-token", // A dummy token for authentication
    };
    localStorage.setItem("authToken", userData.token);
    localStorage.setItem("user", JSON.stringify(userData));

    // Redirect to main page
    navigate("/home");
  };

  // The API code was also implemented but, it showed "invalid login credentials" for each entry thats why local storage is used for storing user data"
  /* API Integration
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "emilys",
          password,
          email,
          expiresInMins: 30,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid login credentials.");
      }

      const data = await response.json();
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      // Redirect to main page
      navigate("/home");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    }
    }; */

  return (
    <form
      className="flex gap-2.5 items-center self-stretch p-10 my-auto bg-white rounded-3xl border border-solid border-neutral-200 min-w-[240px] w-[761px] max-md:px-5 max-md:max-w-full"
      onSubmit={handleLogin}
    >
      <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[681px] max-md:max-w-full">
        <div className="text-4xl font-black leading-[49px] text-zinc-900">
          <span className="font-medium">Welcome to</span>
          <br />
          <span className="text-5xl text-indigo-500 leading-[62px]">
            Unstop{" "}
          </span>
        </div>

        <div className="flex flex-col mt-6 max-w-full text-base font-medium leading-none text-zinc-900 w-[681px]">
          {socialLogins.map((login, index) => (
            <div key={index} className={index > 0 ? "mt-4" : ""}>
              <SocialLoginButton {...login} />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-5 justify-between items-center mt-8 max-w-full text-base leading-none whitespace-nowrap rounded-none text-zinc-900 w-[673px]">
          <div className="shrink-0 self-stretch my-auto max-w-full h-px border border-solid border-stone-300 w-[292px]" />
          <div className="self-stretch">OR</div>
          <div className="shrink-0 self-stretch my-auto w-72 max-w-full h-px border border-solid border-stone-300" />
        </div>

        <div className="flex flex-col mt-8 w-full text-zinc-900 max-md:max-w-full">
          <InputField
            icon="/assets/username-icon.png" // Local image path
            label="User name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="mt-2.5">
            <InputField
              icon="/assets/email-icon.png" // Local image path
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-2.5">
            <InputField
              icon="/assets/password-icon.png" // Local image path
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showEye={true}
            />
          </div>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        <div className="flex flex-wrap gap-10 justify-between items-center mt-8 w-full text-base leading-none max-md:max-w-full">
          <div className="flex gap-4 self-stretch my-auto rounded text-zinc-900 w-[153px]">
            <input
              type="checkbox"
              id="remember"
              className="flex shrink-0 my-auto rounded border border-solid bg-neutral-200 border-zinc-300 h-[18px] w-[18px]"
            />
            <label htmlFor="remember" className="basis-auto">
              Remember me
            </label>
          </div>
          <button
            type="button"
            className="self-stretch my-auto text-indigo-500"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="gap-2.5 self-stretch px-80 py-7 mt-8 w-full text-base font-semibold leading-none text-white whitespace-nowrap bg-indigo-500 rounded-2xl min-h-[77px] max-md:px-5 max-md:max-w-full"
        >
          Login
        </button>

        <div className="gap-2.5 self-stretch mt-8 w-full text-base leading-none text-zinc-900 max-md:max-w-full">
          Don't have an account?{" "}
          <button type="button" className="text-indigo-500">
            Register
          </button>
        </div>
      </div>
    </form>
  );
};
