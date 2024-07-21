import React from "react";

import { GiMagnifyingGlass } from "react-icons/gi";

export default function ImgList({ gallery, cName, divRefs }) {
  return (
    <>
      <ul>
        {gallery.map((item, index) => {
          return (
            <li key={index} className={cName + (index + 1).toString()}>
              <div ref={(el) => (divRefs.current[index] = el)}>
                <img src={item} key={index} alt='' />
              </div>{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
}
