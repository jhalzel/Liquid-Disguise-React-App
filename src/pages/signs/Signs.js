import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// styles
import "./Signs.css";

// components
import Footer from "../../components/Footer";
import SlidingGallery from "../../components/SlidingGallery";
import Colors from "../../components/Colors";
import Subheaders from "../../components/Subheaders";
import FloatingList from "../../components/FloatingList";
import Closer from "../../components/Closer";

export default function Signs({
  importAll,
  setBack,
  setPage,
  handleClick,
  sub1,
}) {
  const location = useLocation();

  //reset background
  useEffect(() => {
    setBack("");
    setPage("Signs");
  }, [location, setBack, setPage]);

  const gallery = importAll(
    require.context(
      "../../assets/images/sign_imgs/slider",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const backgrounds = importAll(
    require.context(
      "../../assets/backgrounds/commercial",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  backgrounds.push("");

  const paintbrushes = importAll(
    require.context(
      "../../assets/icons/business_icons",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  paintbrushes.push("");

  const midgallery = importAll(
    require.context("../../assets/images/sign_imgs/gallery")
  );

  const list = [
    <h4>"Wall graphix"</h4>,
    <h4> "Logos, banners"</h4>,
    <h4>"Company emblems"</h4>,
    <h4>"Custom Murals"</h4>,
    <h4> "Giant letters, numbers"</h4>,
    <h4>"Interior / exteriors of your building(s) "</h4>,
  ];

  return (
    <>
      <SlidingGallery gallery={gallery} cName={"signSlider"} />
      <Colors
        handleClick={handleClick}
        colors={backgrounds}
        paintbrushes={paintbrushes}
      />

      <Subheaders
        sub1={"A unique way for your business to stand out"}
        sub2={
          " Fabricated signs are everywhere vying for our attention! An unusual and appealing alternative is a custom painted wall sign or graphic display: "
        }
      />

      {
        <section className="bottom">
          <FloatingList list={list} />
        </section>
      }
      {
        <section className="signGallery">
          {midgallery.map((item, index) => {
            return (
              <div key={index}>
                <img src={item} alt="" />
              </div>
            );
          })}
        </section>
      }
      <Closer
        sub1={
          " And compared to fabricated signs, custom painted signage is surprisingly cost effective."
        }
        sub2={sub1}
      />

      <Footer />
    </>
  );
}
