import React from "react";

// components
import FloatingList from "./FloatingList";

export default function About({ list }) {
  return (
    <>
      {" "}
      <section className={"about"} id={"about"}>
        <div>
          <h4>About Liquid Disguise</h4>
        </div>
        <p>
          Liquid Disguise owner, Gary Halzel, apprenticed with Boston muralist
          James McGurl from 1983 to 1985. During this time they painted
          landscape murals, trompe l'oeils and created faux effects in paint for
          many restaurants, churches and hotels.
        </p>
        <p>
          In 1985 Gary began to paint independently, launching Liquid Disguise
          when he was discovered by Bob Vila and featured on Bob Vila's Home
          Again in 1993.
        </p>
        <p>
          Since that time Liquid Disguise has been creating murals and other
          artwork for homes and businesses (including hand-painted signage), and
          would love to help you with:
        </p>

        <section className="contactBottom">
          <FloatingList list={list} />
        </section>

        <p>
          {" "}
          Many people choose to accessorize their homes, kitchens, and kids'
          rooms with stylized lettering, tasteful, colorful graffiti or wall
          graphix by Liquid Disguise – maybe the perfect way to get your and
          your family's ideas visually expressed!
        </p>
      </section>
    </>
  );
}
