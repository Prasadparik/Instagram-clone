import React, { useState, useEffect } from "react";
import faker from "faker";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10 bg-white p-4 shadow-sm">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div className="flex items-center justify-between mt-3 ">
          <img
            src={profile.avatar}
            className="w-10 h-10 rounded-full 
			border p-[2px]"
            alt="profile pic"
          />
          <div className="flex-1 ml-4 ">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-sm text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>
          <button className="text-blue-400 text-xs font-bold ml-4">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
