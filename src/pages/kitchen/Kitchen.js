import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

//styles
import "./Kitchen.css";

// components
import SlidingGallery from "../../../components/SlidingGallery";
import Colors from "../../../components/Colors";
import FloatingList from "../../../components/FloatingList";
import Closer from "../../../components/Closer";
import Footer from "../../../components/Footer";

//sliding-gallery-images
import k1 from "./images/kitch1.png";
import k2 from "./images/kitch2.png";
import k3 from "./images/kitch3.png";
import k4 from "./images/kitch4.png";
import k5 from "./images/kitch5.png";
import k6 from "./images/kitch6.png";
import k7 from "./images/kitch7.png";
import k8 from "./images/kitch8.png";
import k9 from "./images/kitch9.png";

//backgrounds
import pal from "./icons/iconmonstr-paintbrush-7.svg";
import pal1 from "./icons/bluPal.png";
import pal2 from "./icons/kredPal.png";
import pal3 from "./icons/kgreenPal.png";
import pal4 from "./icons/kgoldPal.png";
import pal5 from "./icons/kgrayPal.png";

// backgrounds
import b1 from "./icons/blueki.jpg";
import b2 from "./icons/redki.jpg";
import b3 from "./icons/greenki.jpg";
import b4 from "./icons/goldki.jpg";
import b5 from "./icons/grayki.jpg";

// middle gallery
import k10 from "./images/kitch10.png";
import k11 from "./images/kitch11.png";
import Subheaders from "../../../components/Subheaders";

export default function Kitchen({ setBack, setPage, handleClick, sub1 }) {
  const location = useLocation();

  //reset background
  useEffect(() => {
    setBack("");
    setPage("Kitchen & Dining");
  }, [location, setBack, setPage]);

  const slidinggallery = [k1, k2, k3, k4, k5, k6, k7, k8, k9];

  const pallets = [pal, pal1, pal2, pal3, pal4, pal5];

  const backgrounds = ["", b1, b2, b3, b4, b5];

  const midGal = [k10, k11];

  const list1 = [
    "decorative rag rolling",
    "sponge painting techniques",
    "elegant marblizing, granitizing ",
    "wood grain simulation",
    "textured finishes",
    "custom stenciling",
    "custom murals          ",
    "decorative patterns and motifs",
    "subtle textures and designs  ",
    "beautiful color washes  ",
    "murals and lettering  ",
    "hand-painted tiles   ",
    "wood staining, antiquing and aging    ",
    "decorations in every style",
    "old world ambience to contemporary",
    "faux finishes",
  ];

  const list2 = [
    "walls",
    "ceilings and floors",
    "windows and doors",
    "trim and woodwork",
    "cabinets",
    "built-ins",
    "countertops",
    "furniture",
  ];
  return (
    <>
      <SlidingGallery gallery={slidinggallery} cName={"k"} />
      <Colors
        colors={backgrounds}
        paintbrushes={pallets}
        handleClick={handleClick}
      />
      <Subheaders
        sub1={
          "Your beautiful kitchen enhanced with painting by Liquid Disguise"
        }
        sub2={
          "The kitchen and dining areas are often the most vital spaces of your home, which make them the perfect settings to remind people of family, bounty, good times and great feasts."
        }
      />
      <Subheaders
        sub2={
          "And Liquid Disguise has the right ingredients to help whip up such delectable painted areas of your home: "
        }
      />
      {
        <section className="kDisplay">
          {/* conditional styling of carousel */}
          <div className="kCarousel">
            <FloatingList list={list1} />
          </div>
          {/* conditional middle Gallery */}
          <section className="kGallery">
            <div>
              <img src={midGal[0]} alt="image1" />
              <h5>
                "In the process of how Liquid Disguise&copy; creates the
                elegance of hand-painted striping in a dining room."
              </h5>
            </div>
            <div>
              <img src={midGal[1]} alt="image2" />
              <h5>
                "Finished hand-painted striping job by Liquid Disguise&copy;"
              </h5>
            </div>
          </section>
        </section>
      }
      <Subheaders
        sub2={"Liquid Disguise creates decorative painted finishes on: "}
      />
      <section className="satisfied">
        {" "}
        <div className="kSidewaysList">
          <FloatingList list={list2} />
        </div>
      </section>
      <Closer sub1={sub1} />
      <Footer />
    </>
  );
}
