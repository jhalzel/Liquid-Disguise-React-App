import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// styles
import "./Bathrooms.css";

// components
import SlidingGallery from "../../../components/SlidingGallery";
import Colors from "../../../components/Colors";
import Subheaders from "../../../components/Subheaders";
import FloatingList from "../../../components/FloatingList";
import Closer from "../../../components/Closer";
import Footer from "../../../components/Footer";

// images
import bath1 from "./images/bath1.png";
import bath2 from "./images/bath2.JPG";
import bath3 from "./images/bath3.JPG";
import bath4 from "./images/bath4.JPG";
import bath5 from "./images/bath5.JPG";
import bath6 from "./images/bath6.JPG";
import bath7 from "./images/bath7.JPG";
import bath8 from "./images/bath8.JPG";
import bath10 from "./images/bath10.JPG";
import bath11 from "./images/bath11.JPG";
import bath12 from "./images/bath12.png";
import bath13 from "./images/bath13.jpg";
import bath14 from "./images/bath14.jpg";
import bath15 from "./images/bath15.jpg";
import bath16 from "./images/bath16.png";
import bath17 from "./images/bath17.png";

// backgrounds
import blue from "./icons/blueba.jpg";
import red from "./icons/redba.jpg";
import green from "./icons/greenba.jpg";
import gold from "./icons/goldba.jpg";
import gray from "./icons/grayba.jpg";

//pallets
import pa from "../../../icons/iconmonstr-paintbrush-7.svg";
import pa1 from "./icons/blueBath.png";
import pa2 from "./icons/redBath.png";
import pa3 from "./icons/greenBath.png";
import pa4 from "./icons/goldBath.png";
import pa5 from "./icons/grayBath.png";

export default function Bedrooms({ setBack, handleClick, setPage, sub1 }) {
  const location = useLocation();
  //reset background
  useEffect(() => {
    setBack("");
    setPage("Bathrooms");
  }, [location, setBack, setPage]);

  const slidingGal = [
    bath11,
    bath4,
    bath5,
    bath6,
    bath1,
    bath7,
    bath8,
    bath12,
    bath3,
  ];

  const backgrounds = ["", blue, red, green, gold, gray];

  const pallets = [pa, pa1, pa2, pa3, pa4, pa5];

  const midGallery = [bath2, bath10, bath14, bath13, bath15, bath16, bath17];

  const list = [
    <h4>custom decorative painting </h4>,
    <h4>classic and contemporary effects</h4>,
    <h4>unlimited variations and styles</h4>,
    <h4>mold & mildew prevention</h4>,
  ];

  return (
    <>
      <SlidingGallery gallery={slidingGal} />
      <Colors
        handleClick={handleClick}
        paintbrushes={pallets}
        colors={backgrounds}
      />
      {/* subheaders */}
      <Subheaders
        sub1="Wonderful master bedrooms, boudoirs, children's rooms with painting by Liquid Disguise"
        sub2=" Each room to its own personality. Every bedroom can be uniquely designed (maybe with its own theme?). Let your bedrooms tell their very own bed-time stories through custom decorative treatments."
      />
      {
        <section className="bathGallery">
          {midGallery.map((item, index) => {
            return (
              <div key={index}>
                <img src={item} alt="" />
              </div>
            );
          })}
        </section>
      }
      <Subheaders sub2="If you have children, it's great for them to be part of the design and color choices ... so that as the room is transformed, they feel pride and ownership of it. " />
      <Subheaders sub2="Liquid Disguise has even heard from more than one customer that their children took better care of their rooms after a make-over. Call today for a free consultation and estimate. " />
      <Subheaders sub1="Liquid Disguise can transform with: " />
      {
        <section className="bathBottom">
          <FloatingList list={list} />
        </section>
      }
      <Closer sub1={sub1} />
      <Footer />
    </>
  );
}
