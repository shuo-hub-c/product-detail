import React from 'react';
import './TagItem.css';

function TagItem({ tagText }) {
  return (
    <div className="tag-item-wrapper">
       {tagText}
    </div>
  );
}

export default TagItem;