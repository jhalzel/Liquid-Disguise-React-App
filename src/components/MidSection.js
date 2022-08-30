import React from "react";

export default function MidSection({ woods, p1, list, fig }) {
  return (
    <>
      <section className="bottom">
        <p className="p2">{p1}</p>

        <ul className="list2">
          {list.map((item, index) => {
            return (
              <li key={index}>
                {" "}
                <h4>{item}</h4>
              </li>
            );
          })}
        </ul>

        <div className="wrapper">
          <div className="mural">
            <img src={woods} alt="image1" />
            <h5>{fig}</h5>
          </div>
        </div>
      </section>
    </>
  );
}
