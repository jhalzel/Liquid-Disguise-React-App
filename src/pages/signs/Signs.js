import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// styles
import "./Signs.css";

// components
import Footer from "../../../components/Footer";
import SlidingGallery from "../../../components/SlidingGallery";
import Colors from "../../../components/Colors";
import Subheaders from "../../../components/Subheaders";
import FloatingList from "../../../components/FloatingList";

// sliding-gallery images
import sl1 from "./images/sign5.png";
import sl2 from "./images/sign10.png";
import sl3 from "./images/sign13.jpg";
import sl4 from "./images/sign14.png";
import sl5 from "./images/sign6.png";
import sl6 from "./images/sign4.png";
import sl7 from "./images/sign2.jpg";
import sl8 from "./images/sign18.JPG";
import sl9 from "./images/sign15.jpg";

// lower gallery images
import sl10 from "./images/sign1.png";
import sl11 from "./images/sign7.png";
import sl12 from "./images/sign8.png";
import sl13 from "./images/sign11.png";
import sl14 from "./images/sign17.png";

//background colors
import bg1 from "./images/com-blue.jpg";
import bg2 from "./images/com-red.jpg";
import bg3 from "./images/com-green.jpg";
import bg4 from "./images/com-gold.jpg";
import bg5 from "./images/com-gray.jpg";

// pallets
import p from "./icons/mainPaintbrush.svg";
import p1 from "./icons/com-blue-icon.png";
import p2 from "./icons/com-red-icon.png";
import p3 from "./icons/com-green-icon.png";
import p4 from "./icons/com-gold-icon.png";
import p5 from "./icons/com-gray-icon.png";
import Closer from "../../../components/Closer";

export default function Signs({ setBack, setPage, handleClick, sub1 }) {
  const location = useLocation();

  //reset background
  useEffect(() => {
    setBack("");
    setPage("Signs");
  }, [location, setBack, setPage]);

  const gallery = [sl1, sl2, sl3, sl10, sl5, sl6, sl7, sl8, sl9];

  const backgrounds = ["", bg1, bg2, bg3, bg4, bg5];

  const paintbrushes = [p, p1, p2, p3, p4, p5];

  const list = [
    <h4>"Wall graphix"</h4>,
    <h4> "Logos, banners"</h4>,
    <h4>"Company emblems"</h4>,
    <h4>"Custom Murals"</h4>,
    <h4> "Giant letters, numbers"</h4>,
    <h4>"Interior / exteriors of your building(s) "</h4>,
  ];

  const midgallery = [sl4, sl11, sl12, sl13, sl14];

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
