import React from "react";

import { GiMagnifyingGlass } from "react-icons/gi";

export default function ImgList({ gallery, cName }) {
  return (
    <>
      <ul>
        {gallery.map((item, index) => {
          return (
            <li key={index} className={cName + (index + 1).toString()}>
              <div>
                <img src={item} key={index} alt='' />
              </div>{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
}
