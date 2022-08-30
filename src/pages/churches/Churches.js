import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import Subheaders from "../../../components/Subheaders";
import SlidingGallery from "../../../components/SlidingGallery";
import Colors from "../../../components/Colors";
import Footer from "../../../components/Footer";
import FloatingList from "../../../components/FloatingList";
import Closer from "../../../components/Closer";

// sliding-Gallery Images
import sc1 from "./images/schurch1.JPG";
import sc2 from "./images/sChurch2.JPG";
import sc3 from "./images/sChurch3.JPG";
import sc4 from "./images/sChurch4.jpg";
import sc5 from "./images/sChurch5.jpg";
import sc6 from "./images/sChurch6.jpg";
import sc7 from "./images/sChurch7.JPG";
import sc8 from "./images/sChurch8.jpg";
import sc9 from "./images/sChurch9.jpg";
import Display from "../../../components/Display";

// background colors
import blue from "./icons/bluech.jpg";
import red from "./icons/redch.jpg";
import green from "./icons/greench.jpg";
import gold from "./icons/goldch.jpg";
import gray from "./icons/graych.jpg";

// pallets
import pal from "./icons/mainPaintbrush.svg";
import pal1 from "./icons/bluch.png";
import pal2 from "./icons/redch.png";
import pal3 from "./icons/grech.png";
import pal4 from "./icons/golch.png";
import pal5 from "./icons/grach.png";

// mid-Gallery
import chG1 from "./images/blueChrist.jpg";
import chG2 from "./images/churchDoor.jpg";
import chG3 from "./images/firstChur.jpg";
import chG4 from "./images/christ.JPG";

// lower images
import waterDamage from "./images/waterDamage.png";
import fixedWaterDamage from "./images/fixedWaterDamage.png";

export default function Churches({ setBack, setPage, handleClick, sub1 }) {
  const location = useLocation();
  //reset background
  useEffect(() => {
    setBack("");
    setPage("Houses of Worship");
  }, [location, setBack, setPage]);

  const slidingGal = [sc4, sc5, sc3, sc1, sc2, sc6, sc7, sc8, sc9];

  const paintbrushes = [pal, pal1, pal2, pal3, pal4, pal5];

  const colors = ["", blue, red, green, gold, gray];

  const midGallery = [chG1, chG2, chG3, chG4];

  const list = [
    "Water, mold, mildew, smoke and fire damaged walls, ceilings and cabinetry repaired",
    "Icons painted and refurbished",
    "Guilding",
    "Liturgical artwork and murals",
    "Restoration/repainting: nativity sets and stations of the cross",
    "Marblizing",
    "Granitizing",
    "Faux bois (wood grain simulation)",
    "Textured surface treatments",
    "Ornamental stenciling",
    "Columns",
    "Ceilings",
  ];

  const satList = [
    "Belmont AME Zion Church, Worcester",
    "St. James Episcopal Church, Cambridge",
    "Christ Church, Quincy",
    "St. Eulalia's Church, Winchester",
    "House of Restoration Church, Hartford",
    "Grace Baptist Church, Windsor, Conn.",
    "Greendale Ave Worship Center, Needham",
    "Sacred Heart of Jesus, Milford",
    "Bible Way Baptist Church, Worcester",
    "Liberty Assembly of God, West Boylston",
    "Congregation B'nai Shalom, Westboro",
    "Congregation Ruach Israel, Needham",
    "Congregation Shuvah Israel, Bloomfield, Conn.  ",
    "Congregation Melech Yisrael, Cherry Valley ",
  ];

  const satList2 = [
    "Holy Trinity Greek Orthodox Church, Norwich Conn.  ",
    "Ascension Church, Worcester",
    "St Vincent De Paul Catholic Church, South Boston",
    "St Bernadette's Catholic Church, Northboro",
    "Our Lady of Good Council, West Warwick, RI",
    "St Mary's Catholic Church, Waltham",
    "St Thomas Catholic Church, Salem",
    "St Stephen's Catholic Church, Worcester",
    "St Mary's Catholic Church, Westfield",
    "Sacred Heart Catholic Church, Norwich, Conn.",
    "Assumption College, Worcester",
    "Shalom Company, Bloomfield, Conn.",
    "Greendale Av Worship Center, Needham",
    "Church of the Nazarene, Framingham ",
  ];

  const fig1 = "Water Damaged Church Interior";
  const fig2 = "Church Interior Restored by Liquid Disguise";

  return (
    <>
      <SlidingGallery gallery={slidingGal} cName={"church-slider"} />
      <Colors
        handleClick={handleClick}
        paintbrushes={paintbrushes}
        colors={colors}
      />
      <Subheaders
        sub1={
          "Houses of worship restored and new structures painted by Liquid Disguise"
        }
        sub2={
          " Liquid Disguise is capable of executing all types of interior and exterior painting projects (including staging/scaffolded heights): "
        }
      />
      <Display
        styling={"main-body"}
        galleryName={"gallery"}
        midGallery={midGallery}
        cName={"churchGal"}
        list={list}
        carouselClass={"churchCarousel"}
      />
      {/* lower mural */}
      {
        <div className="lowerSection">
          <section className="churchMural">
            <div>
              <img src={waterDamage} alt="image1" />
              <h5>{fig1}</h5>
            </div>
            <div>
              <img src={fixedWaterDamage} alt="image2" />
              <h5>{fig2}</h5>
            </div>
          </section>
        </div>
      }
      {
        <section className="satisfied">
          <Subheaders
            sub2={
              "Some of the churches and synagogues that have utilized Liquid Disguise's expertise include: "
            }
          />
          <div className="churchSideways">
            <FloatingList list={satList} />
          </div>
          <div className="churchSideways2">
            <FloatingList list={satList2} />
          </div>
        </section>
      }

      {/* Closer */}
      <Closer sub1={sub1} sub2={""} />

      <Footer />
    </>
  );
}
