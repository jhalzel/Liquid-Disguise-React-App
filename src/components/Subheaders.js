import React from "react";

export default function Subheaders({ sub1, sub2 }) {
  return (
    <>
      <section className="sub-headers">
        <h3 className="p">{sub1}</h3>
        <p className="p1">{sub2}</p>
      </section>
    </>
  );
}
