import React from "react";
import "./Tags.css";
import TagItem from "../tagItem/TagItem";

function Tags({ tags }) {
  return (
    <div className="tags-wrapper">
      {tags && tags.map((tag) => <TagItem tagText={tag} />)}
    </div>
  );
}

export default Tags;
