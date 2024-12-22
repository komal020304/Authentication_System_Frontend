import React from "react";

export function ProfileCard({ userData, onLogout }) {
  return (
    <div className="flex flex-col items-center justify-center p-5 mt-14 w-full text-center rounded-3xl border border-solid border-neutral-200 shadow-[0px_4px_14px_rgba(0,0,0,0.65)] max-md:mt-10">
      <img
        loading="lazy"
        src={userData.imageUrl}
        alt={`Profile picture of ${userData.name}`}
        className="object-contain max-w-full aspect-square rounded-[100px] w-[120px]"
      />
      <div className="flex flex-col items-center mt-5">
        <div className="text-base font-bold text-indigo-500">
          {userData.name}
        </div>
        <div className="flex flex-col items-center mt-2.5 text-xs font-medium whitespace-nowrap text-neutral-700">
          <div>{userData.email}</div>
          <div className="mt-1">{userData.gender}</div>
        </div>
      </div>
      <button
        onClick={onLogout}
        className="mt-5 max-w-full text-xs font-bold text-white whitespace-nowrap bg-indigo-500 rounded-2xl border border-white border-solid w-[137px] p-2"
        aria-label="Logout from account"
      >
        Logout
      </button>
    </div>
  );
}
