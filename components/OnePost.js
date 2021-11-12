import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

const OnePost = ({ id, username, userImg, img, caption }) => {
  return (
    <div className="mt-4 bg-white shadow-lg  rounded-md">
      {/* Header */}

      <div className="flex items-center space-x-3 p-4">
        <img
          src={userImg}
          alt="post"
          className="rounded-full w-14 border-gray-100 border-4"
        />
        <p className="flex-1">{username}</p>
        <DotsHorizontalIcon className="h-6" />
      </div>

      {/* img */}
      <img
        src={img}
        alt="post"
        className="object-cover
	   w-full"
      />
      {/* Button */}

      <div className="flex justify-between px-5 py-5">
        <div className="flex space-x-4  ">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn rotate-45 " />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>

      {/* comment */}
      {/* input box */}

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="btn" />
        <input
          placeholder="Comments..."
          type="text"
          className="border-none outline-none
		focus:ring-0 flex-1"
        />
        <button className="text-blue-400 font-semibold">Post</button>
      </form>
    </div>
  );
};

export default OnePost;
