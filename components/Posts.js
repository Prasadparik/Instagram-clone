import React from "react";
import OnePost from "./OnePost";

const posts = [
  {
    id: "1",
    username: "SammmyJoe",
    userImg: "https://parikprasad.netlify.app/assets/img/profilePic2.jpg",
    img: "https://images.pexels.com/photos/4300348/pexels-photo-4300348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    caption:
      "Remember that #happiness is a way of #travel 🏖 – not a #destination",
  },
  {
    id: "3",
    username: "emma Bauso ",
    userImg:
      "https://images.pexels.com/users/avatars/1183828/emma-bauso-630.jpeg?auto=compress&fit=crop&h=256&w=256",
    img: "https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    caption: "Awesome Post 😎",
  },
  {
    id: "3",
    username: "emmy ",
    userImg:
      "https://images.pexels.com/users/avatars/401691/oladimeji-ajegbile-321.jpeg?auto=compress&fit=crop&h=256&w=256",
    img: "https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    caption: "Awesome Post 😎",
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <OnePost
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
          />
        );
      })}
    </div>
  );
};

export default Posts;
