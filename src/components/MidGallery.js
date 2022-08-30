import React from "react";

export default function MidGallery({ midGallery, cName }) {
  return (
    <>
      {midGallery.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <img
              src={item}
              className={cName + (index + 1).toString()}
              alt=""
            ></img>
          </React.Fragment>
        );
      })}
    </>
  );
}
