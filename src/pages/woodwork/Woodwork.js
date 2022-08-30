import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// styles
import "./Woodwork.css";

// components
import Closer from "../../../components/Closer";
import Subheaders from "../../../components/Subheaders";
import SlidingGallery from "../../../components/SlidingGallery";
import Colors from "../../../components/Colors";
import Footer from "../../../components/Footer";
import Display from "../../../components/Display";

// images
import slidingGallery1 from "./images/wood24.png";
import slidingGallery2 from "./images/wood23.png";
import slidingGallery3 from "./images/wood22.png";
import slidingGallery4 from "./images/wood21.png";
import slidingGallery5 from "./images/wood20.png";
import slidingGallery6 from "./images/wood19.jpg";
import slidingGallery8 from "./images/wood16.jpg";
import slidingGallery9 from "./images/wood15.jpg";

// backgrounds
import bg1 from "./icons/bluewo.jpg";
import bg2 from "./icons/redwo.jpg";
import bg3 from "./icons/greenwo.jpg";
import bg4 from "./icons/goldwo.jpg";
import bg5 from "./icons/graywo.jpg";

//pallets
import pal1 from "../../../icons/iconmonstr-paintbrush-7.svg";
import pal2 from "./icons/blueWood.png";
import pal3 from "./icons/redWood.png";
import pal4 from "./icons/greenWood.png";
import pal5 from "./icons/goldWood.png";
import pal6 from "./icons/grayWood.png";

//mid-gallery
import mg1 from "./images/wood14.jpg";
import mg2 from "./images/wood13.jpg";
import mg3 from "./images/wood12.jpg";
import mg4 from "./images/wood11.jpg";
import mg5 from "./images/wood10.jpg";
import mg6 from "./images/wood9.jpg";
import mg7 from "./images/wood8.JPG";
import mg8 from "./images/wood7.JPG";

//mid-gallery 2
import midGal1 from "./images/wood6.JPG";
import midGal2 from "./images/wood5.JPG";
import midGal3 from "./images/wood4.JPG";
import midGal4 from "./images/wood3.JPG";
import midGal5 from "./images/wood2.JPG";
import midGal6 from "./images/wood1.JPG";
import midGal7 from "./images/cabinet.png";
import midGal8 from "./images/wood25.jpg";

export default function Business_Office({
  setBack,
  handleClick,
  setPage,
  sub1,
}) {
  const location = useLocation();

  //reset background
  useEffect(() => {
    setBack("");
    setPage("WoodWork");
  }, [location, setBack, setPage]);

  const slidingGallery = [
    slidingGallery8,
    slidingGallery3,
    midGal5,
    midGal3,
    mg4,
    mg3,
    slidingGallery6,
    midGal4,
    slidingGallery1,
  ];

  const backgrounds = ["", bg1, bg2, bg3, bg4, bg5];

  const pallets = [pal1, pal2, pal3, pal4, pal5, pal6];

  const midGallery = [
    mg1,
    slidingGallery6,
    mg6,
    mg5,
    mg7,
    slidingGallery4,
    mg8,
    slidingGallery2,
    midGal6,
    mg2,
  ];

  const midGallery2 = [
    midGal1,
    midGal2,
    slidingGallery9,
    midGal8,
    slidingGallery5,
    midGal7,
  ];

  const list = [
    "windows",
    "doors",
    "woodwork",
    "trim",
    "baseboards",
    "chair rails",
    "crown moldings",
    "cabinets",
    "bookcases",
    "built-ins ",
    "countertops",
    "railings",
    "banisters",
    "furniture",
  ];

  const list2 = [
    "wood grain simulation (faux bois)",
    "metallic finishes",
    "marbelizing",
    "granitizing",
    "other faux finishes",
    "textured finishes ",
  ];

  return (
    <>
      <SlidingGallery gallery={slidingGallery} />
      {/* color Pallets */}
      <Colors
        handleClick={handleClick}
        colors={backgrounds}
        paintbrushes={pallets}
      />
      {/* subheaders */}
      <Subheaders
        sub1="Woodwork and cabinetry can be reimagined"
        sub2=" Liquid Disguise beautifies your:  "
      />
      {/* display */}
      <Display
        // gallery className
        galleryName={"gallery"}
        // gallery classNames
        cName={"woodGal"}
        // styling
        styling={"ext-main-body"}
        // list
        list={list}
        // images
        midGallery={midGallery}
        //carousel
        carouselClass={"woodCarousel2"}
      />
      {
        <Subheaders sub2="Liquid Disguise uses the following treatments & more:" />
      }

      <Display
        // gallery className
        galleryName={"gallery"}
        // image classNames
        cName={"swg"}
        // Display Body className
        styling={"ext-main-body"}
        // list
        list={list2}
        // images
        midGallery={midGallery2}
        //carousel
        carouselClass={"woodCarousel"}
      />

      {/* Closer */}
      <Closer sub1={sub1} sub2={""} />
      {/* Footer */}
      <Footer />
    </>
  );
}
