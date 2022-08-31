import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Closer({ sub1, sub2 }) {
  const location = useLocation;

  useEffect(() => {
    // @ts-ignore
    if (location.pathname === "contact") {
      return () => {
        <>
          <section className="closer">
            <div className="p3"></div>
          </section>
        </>;
      };
    }
  }, [location]);

  return (
    <>
      <section className="closer">
        <div className="p3">
          <p className="s1">{sub1}</p>
          <br />
          <br />
          <p className="s2">{sub2}</p>
        </div>
      </section>
    </>
  );
}
