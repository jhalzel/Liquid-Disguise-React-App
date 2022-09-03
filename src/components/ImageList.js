import React from "react";

export default function ImgList({ gallery, cName }) {
  // const handleHover = (e) => {
  //   console.log(e.target);
  //   console.log(e.currentTarget.parentNode.parentNode);
  //   const classList = e.currentTarget.parentNode.parentNode.classList;
  //   if (!classList.contains("sliding-gallery2")) {
  //     classList.add("sliding-gallery2");
  //   }
  // };
  // const handleExit = (e) => {
  //   console.log(e.target);
  //   console.log(e.currentTarget.parentNode.parentNode);
  //   const classList = e.currentTarget.parentNode.parentNode.classList;
  // onMouseOver={(e) => handleHover(e)}
  //   classList.toggle("sliding-gallery2");
  // };

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
