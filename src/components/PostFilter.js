import React from "react";

const PostFilter = ({ tags, onFilter }) => {
  console.log(tags);
  return (
    <div className="tagFilter">
      <button
        className="btn btn-sm btn-outline-secondary mx-1"
        onClick={() => onFilter("all")}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          className="btn btn-sm btn-outline-primary mx-1"
          key={tag}
          onClick={() => onFilter(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default PostFilter;
