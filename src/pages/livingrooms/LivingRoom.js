import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

//styles
import "./LivingRooms.css";

//components
import SlidingGallery from "../../../components/SlidingGallery";
import Colors from "../../../components/Colors";
import Subheaders from "../../../components/Subheaders";
import Display from "../../../components/Display";
import Closer from "../../../components/Closer";
import Footer from "../../../components/Footer";

// backgrounds
import blue from "./icons/bluefa.jpg";
import red from "./icons/redfa.jpg";
import green from "./icons/greenfa.jpg";
import gold from "./icons/goldfa.jpg";
import gray from "./icons/grayfa.jpg";

// pallets
import pa from "../../../icons/iconmonstr-paintbrush-7.svg";
import pa1 from "./icons/blueLiv.png";
import pa2 from "./icons/redLiv.png";
import pa3 from "./icons/greenLiv.png";
import pa4 from "./icons/goldLiv.png";
import pa5 from "./icons/grayLiv.png";

// images
import img1 from "./images/art-work.png";
import img2 from "./images/candles.png";
import img3 from "./images/chimney.jpg";
import img4 from "./images/doorFrame.JPG";
import img5 from "./images/greencase.png";
import img6 from "./images/lime-green_room.png";
import img7 from "./images/livingMural1.jpg";
import img8 from "./images/livingMural2.jpg";
import img9 from "./images/rhombus.png";
import img10 from "./images/roomwavey.png";
import img11 from "./images/shelfthing.png";
import img12 from "./images/silvdoor.png";
import img13 from "./images/trippy.png";
import img14 from "./images/wavey.png";
import img15 from "./images/workInprogress.JPG";
import img16 from "./images/liv16.jpg";
import img17 from "./images/liv17.jpg";
import img18 from "./images/liv18.jpg";

export default function LivingRooms({ setBack, setPage, handleClick, sub1 }) {
  const location = useLocation();

  //reset background
  useEffect(() => {
    setBack("");
    setPage("Living Rooms");
  }, [location, setBack, setPage]);

  const slidingGallery = [
    img2,
    img12,
    img10,
    img14,
    img6,
    img15,
    img8,
    img4,
    img11,
  ];

  const pallets = [pa, pa1, pa2, pa3, pa4, pa5];

  const colors = ["", blue, red, green, gold, gray];

  const midGallery = [img1, img3, img5, img16];

  const list = [
    "family rooms",
    "hallways",
    "living rooms",
    "foyers",
    "basements",
    "stairwells",
    "attics",
    "mud-rooms",
    "garages",
    "wine cellars",
    "libraries",
    "home offices",
  ];

  const list2 = [
    "ceilings",
    "doors and door frames",
    "windows and casings",
    "all trim and woodwork",
    "crown moldings",
    "chair-rails",
    "baseboards",
    "heaters/radiators",
    "cabinets",
    "built-ins",
    "countertops",
    "furniture",
    "floors",
  ];

  const midGal2 = [img17, img13, img7, img9, img18];

  const lLi1 = [
    "ornamental stencilling",
    "paints & stains",
    "decorative glazes",
    "Venetian plasters  ",
    "Japanese mineral textures",
    "wall graphix ",
    "lustrestone metallic",
    "multispec spray paints",
    "suede & textures",
    " sandstone ",
    "textured paints",
    "urban graffiti",
    "murals",
    "custom artistic effects",
    "pearlescent effects",
  ];

  return (
    <>
      <SlidingGallery gallery={slidingGallery} />
      <Colors
        handleClick={handleClick}
        paintbrushes={pallets}
        colors={colors}
      />
      {
        <Subheaders
          sub1="Enjoy a beautiful living area with painting by Liquid Disguise"
          sub2=" Beautify your home in many different ways at your house, condo, apartment or cottage:"
        />
      }

      {/* display */}
      <Display
        // gallery className
        galleryName={"busGallery"}
        // gallery classNames
        cName={"livGal"}
        // styling
        styling={"bus-main-body"}
        // list
        list={list}
        // images
        midGallery={midGallery}
        //carousel
        carouselClass={"livCarousel"}
      />
      {
        <Subheaders sub2="Liquid Disguise uses the following treatments & more:" />
      }

      {/* display */}
      <Display
        // gallery className
        galleryName={"secBusGallery"}
        // gallery classNames
        cName={"secBusGal"}
        // styling
        styling={"main-body2"}
        // list
        list={list2}
        // images
        midGallery={midGal2}
        //carousel
        carouselClass={"livCarousel2"}
      />
      {
        <section className="bottom">
          <p className="p2">
            Liquid Disguise can help you conceptualize and visualize the
            decorative possibilities. Some of the finishes in which we have
            expertise:{" "}
          </p>

          <ul className="list2">
            {lLi1.map((item, index) => {
              return (
                <li key={index}>
                  {" "}
                  <h4>{item}</h4>
                </li>
              );
            })}
          </ul>
        </section>
      }
      <Closer sub1={sub1} />
      <Footer />
    </>
  );
}
