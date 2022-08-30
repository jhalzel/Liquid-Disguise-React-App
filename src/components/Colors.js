import React from "react";

export default function Colors({ handleClick, paintbrushes, colors, page }) {
  return (
    <>
      <section className="colors">
        {/* <h2 id="subtitle">Custom Decorative Painting of New England </h2> */}
        <h2 id="subtitle">{page}</h2>
        <div className="pallet">
          <ul className="pals">
            <li className="pallet1">
              <img
                onClick={handleClick}
                src={paintbrushes[0]}
                alt="paintbrush"
                itemProp={colors[0]}
              />
            </li>
            <li className="pallet2">
              <img
                onClick={handleClick}
                src={paintbrushes[1]}
                alt="silver"
                itemProp={colors[1]}
              />
            </li>
            <li className="pallet3">
              <img
                onClick={handleClick}
                src={paintbrushes[2]}
                alt="red"
                itemProp={colors[2]}
              />
            </li>
            <li className="pallet4">
              <img
                onClick={handleClick}
                src={paintbrushes[3]}
                alt="green"
                itemProp={colors[3]}
              />
            </li>
            <li className="pallet5">
              <img
                onClick={handleClick}
                src={paintbrushes[4]}
                alt="gold"
                itemProp={colors[4]}
              />
            </li>
            <li className="pallet6">
              <img
                onClick={handleClick}
                src={paintbrushes[5]}
                alt="gray"
                itemProp={colors[5]}
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
