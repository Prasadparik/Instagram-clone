import React from "react";

const MiniProfile = () => {
  return (
    <div
      className="flex items-center justify-between
	mt-14 ml-10 space-x-6 bg-white p-4 shadow-sm"
    >
      <img
        src="https://parikprasad.netlify.app/assets/img/profilePic2.jpg"
        alt="profile-pic"
        className="w-16 h-16 rounded-full border p-[2px]"
      />

      <div>
        <h2 className="font-bold">SurajParik</h2>
        <h3 className="text-sm text-gray-400">Welcome To Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold"> Sign Out</button>
    </div>
  );
};

export default MiniProfile;
