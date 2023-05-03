import React from "react";

const Blog_Card = (params) => {
  const { title,blog } = params.element;
  return (
    <div >
      
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-5"
      >
        <div className="collapse-title text-xl font-medium">
        {title}
        </div>
        <div className="collapse-content">
          <p>{blog}</p>
        </div>
      </div>
      
    </div>
  );
};

export default Blog_Card;
