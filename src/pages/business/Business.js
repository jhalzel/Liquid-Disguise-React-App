import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import Closer from "../../../components/Closer";
import Subheaders from "../../../components/Subheaders";
import SlidingGallery from "../../../components/SlidingGallery";
import Colors from "../../../components/Colors";
import Footer from "../../../components/Footer";
import Display from "../../../components/Display";
import FloatingList from "../../../components/FloatingList";

// images
import slidingGallery1 from "./images/IMG_0914.jpg";
import slidingGallery2 from "./images/IMG_3590.jpg";
import slidingGallery3 from "./images/IMG_4349.jpg";
import slidingGallery4 from "./images/IMG_3588.jpg";
import slidingGallery5 from "./images/IMG_1196.jpg";
import slidingGallery6 from "./images/cabinet.png";
import slidingGallery7 from "./images/sisologies.png";
import slidingGallery8 from "./images/sl1.JPG";
import slidingGallery9 from "./images/sl2.JPG";

// backgrounds
import bg1 from "./images/com-blue.jpg";
import bg2 from "./images/com-red.jpg";
import bg3 from "./images/com-green.jpg";
import bg4 from "./images/com-gold.jpg";
import bg5 from "./images/com-gray.jpg";

//pallets
import pal1 from "./icons/mainPaintbrush.svg";
import pal2 from "./icons/com-blue-icon.png";
import pal3 from "./icons/com-red-icon.png";
import pal4 from "./icons/com-green-icon.png";
import pal5 from "./icons/com-gold-icon.png";
import pal6 from "./icons/com-gray-icon.png";

//mid-gallery
import build from "./images/build.png";
import swim2 from "./images/swim2.png";
import swim3 from "./images/swim3.png";
import golden from "./images/IMG_2326.jpg";
import com7 from "./images/bmg7.JPG";
import com8 from "./images/bmg6.JPG";

//mid-gallery 2
import midGal1 from "./images/midGal1.JPG";
import midGal2 from "./images/midGal2.JPG";
import midGal3 from "./images/midGal3.JPG";
import midGal4 from "./images/midGal4.JPG";
import midGal5 from "./images/midGal5.jpg";

export default function Business_Office({
  setPage,
  setBack,
  handleClick,
  sub1,
}) {
  const location = useLocation();
  //reset background
  useEffect(() => {
    setBack("");
    setPage("Business & office");
  }, [location, setBack, setPage]);

  const slidingGallery = [
    slidingGallery6,
    slidingGallery2,
    slidingGallery1,
    slidingGallery7,
    slidingGallery5,
    slidingGallery9,
    slidingGallery8,
    slidingGallery3,
    slidingGallery4,
  ];

  const backgrounds = ["", bg1, bg2, bg3, bg4, bg5];

  const pallets = [pal1, pal2, pal3, pal4, pal5, pal6];

  const midGallery = [build, swim2, swim3, golden, com7, com8];

  const midGallery2 = [midGal1, midGal2, midGal3, midGal4, midGal5];

  const list = [
    "Reception rooms",
    "Stairwells",
    "entryways",
    "offices",
    "conference rooms",
    "cafeterias",
    "restaurants",
    "banquet and function halls",
    "exteriors",
  ];

  const list2 = [
    "All other faux finishes ",
    "Decorative rag rolling and sponge painting techniques",
    "Textured finishes",
    "Custom murals ",
    "Custom lettering ",
    "Logos ",
    "Wall graphics ",
    "Graffiti ",
    "Custom stenciling ",
    "Marblizing",
    "Granitizing",
    "Wood grain simulation",
  ];

  const satList = [
    "Preston Productions, Northboro",
    "CIO Inc, Natick",
    "NU-Genesis Technologies, Westboro",
    "Exhibit Design, Acton",
    "Daniels Insurance, Shrewsbury",
    "Service Master, Framingham",
    "Hair Express, Framingham",
    "Peak Physical Therapy, Norwell",
    "WXLO Radio Station, Worcester",
    "Direct Impact Marketing, Needham",
    "Tatnuck Sq. Plaza, Worcester",
    "Westboro Town Hall, Westboro",
    "Mt Pleasant Country Club, Boylston",
    "Knights Cotton Mill Apartments, Hyde Park",
    "Linnaean St Condominiums, Cambridge",
    "Bucknell Apts, Wheaton, Maryland",
    "Schrafft's, Charlestown",
  ];

  const satList2 = [
    "Sheraton Hotel, Plymouth",
    "Assumption College, Worcester",
    "The Shalom Company Cafe, Bloomfield, Conn.",
    "Central Credit Services, Shrewsbury",
    "Service Master, Norwood",
    "AAA, Rockland",
    "Field Corporation, Boston",
    "Resource Option Inc, Needham",
    "Salisbury Hill Estates, Worcester",
    "Sahara Restaurant, Worcester    ",
    "Colonial Restaurant, Worcester",
    "Leo's Ristorante, Worcester      ",
    "The Bagel Bistro, Westboro",
    "The Bronx Bagel, Westboro",
    "The Bronx Bagel 2, Milford",
    "Bodacious Bagels, Ashland",
    "The Coffee Connection, Shrewsbury",
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
        sub1="Business and office interiors and painted wall graphics/lettering and logos by Liquid Disguise"
        sub2="Liquid Disguise has executed all types of commercial painting projects, including: "
      />
      {/* display */}
      <Display
        // gallery className
        galleryName={"busGallery"}
        // gallery classNames
        cName={"busGal"}
        // styling
        styling={"bus-main-body"}
        // list
        list={list}
        // images
        midGallery={midGallery}
        //carousel
        carouselClass={"busCarousel"}
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
        midGallery={midGallery2}
        //carousel
        carouselClass={"busCarousel2"}
      />

      {
        <section className="satisfied">
          <Subheaders
            sub1={
              "Liquid Disguise's growing list of satisfied Commercial Customers"
            }
          />
          <div className="sidewaysList">
            <FloatingList list={satList} />
          </div>
          <div className="sidewaysList2">
            <FloatingList list={satList2} />
          </div>
        </section>
      }
      {/* Closer */}
      <Closer sub1={sub1} sub2={""} />
      {/* Footer */}
      <Footer />
    </>
  );
}
