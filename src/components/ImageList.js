import React from "react";

// styles

export default function imgList({ gallery, cName }) {
  return (
    <>
      <ul>
        {gallery.map((item, index) => {
          return (
            <li key={index} className={cName + (index + 1).toString()}>
              {" "}
              <img src={item} key={index} alt="" />
            </li>
          );
        })}
      </ul>
    </>
  );
}
