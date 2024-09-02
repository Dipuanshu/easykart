/** @format */

import React from "react";
import InstaHome from "./InstaHome";
function InstaPost({ post }) {
  return (
    <div className="border border-red-500 h-10">
      {post?.map(function (item) {
        return (
          <div>
            <InstaHome
              title={item.title}
              likes={item.likes}
              dislikes={item.dislikes}
              views={item.views}
            />
          </div>
        );
      })}
    </div>
  );
}

export default InstaPost;
