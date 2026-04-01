import React from "react";

// tagType অনুযায়ী আলাদা color দেখায়
const tagStyles = {
  "best-seller": "bg-yellow-100 text-yellow-700",
  popular:       "bg-pink-100 text-pink-700",
  new:           "bg-green-100 text-green-700",
};

const TagBadge = ({ tagType, tag }) => {
  const style = tagStyles[tagType] || "bg-gray-100 text-gray-600";

  return (
    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full 
                      absolute top-4 right-4 ${style}`}>
      {tag}
    </span>
  );
};

export default TagBadge;