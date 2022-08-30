import React from "react";

export default function FloatingList({ list }) {
  return (
    <>
      {/* all list items */}
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}
