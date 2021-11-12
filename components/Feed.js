import React from "react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <main
      className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
	xl:grid-cols-3 xl:max-w-6xl mx-auto"
    >
      <section className="col-span-2">
        {/* stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>

      <section>
        <div className="fixed">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  );
};

export default Feed;
