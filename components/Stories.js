import React, { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";
const Stories = () => {
  const [data, setData] = useState([]);

  const add = () => {
    const suggestionsData = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setData(suggestionsData);
  };

  console.log(data);

  useEffect(() => {
    add();
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 
	bg-white mt-8 border-gray-200 
	border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-200"
    >
      {data.map((profile) => {
        return (
          <Story
            key={profile.id}
            img={profile.avatar}
            username={profile.username}
          />
        );
      })}
    </div>
  );
};

export default Stories;
