import React, { useState, useEffect, useCallback } from "react";
import { ProfileCard } from "./ProfileCard";
import { WelcomeHeader } from "./WelcomeHeader";
// import { USER_PROFILE_SCHEMA } from "./types"; // Importing the schema

export function ProfilePage() {
  const [userData, setUserData] = useState(null);
  // const [userData, setUserData] = useState(USER_PROFILE_SCHEMA); // Initialize state with schema

  //Load user data from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    } else {
      window.location.href = "/login";
    }
  }, []);

  //Logout handler
  const handleLogout = useCallback(() => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    window.location.href = "/auth/login";
  }, []);

  if (!userData) {
    return null; // Avoid rendering until userData is available
  }

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-3.5 py-20 bg-white max-md:py-24">
      <div className="flex flex-col max-w-full w-[267px]">
        <WelcomeHeader />
        <ProfileCard
          userData={{
            ...userData,
            imageUrl: "/assets/profile-image.png",
          }}
          onLogout={handleLogout}
        />
      </div>
    </div>
  );
}
