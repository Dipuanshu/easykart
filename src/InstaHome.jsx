/** @format */

import React from "react";
function InstaHome({ title, likes, dislikes, views }) {
  return (
    <div className="">
      <div>{title}</div>
      <div>{dislikes}</div>
      <div>{likes}</div>
      <div>{views}</div>
    </div>
  );
}

export default InstaHome;
