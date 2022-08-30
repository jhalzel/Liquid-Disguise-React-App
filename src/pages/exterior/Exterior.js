import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import SlidingGallery from "../../../components/SlidingGallery";
import Colors from "../../../components/Colors";
import Subheaders from "../../../components/Subheaders";
import Display from "../../../components/Display";
import Closer from "../../../components/Closer";
import Footer from "../../../components/Footer";

// sliding-gallery-images
import sl1 from "./images/ext13.jpg";
import sl2 from "./images/ext11.jpg";
import sl3 from "./images/ext10.JPG";
import sl4 from "./images/ext4.png";
import sl5 from "./images/ext5.png";
import sl6 from "./images/ext6.jpg";
import sl7 from "./images/ext7.jpg";
import sl8 from "./images/ext8.jpg";
import sl9 from "./images/ext9.JPG";

//background images
import blue from "./backgrounds/blueex.jpg";
import red from "./backgrounds/redex.jpg";
import green from "./backgrounds/greenex.jpg";
import gold from "./backgrounds/goldex.jpg";
import gray from "./backgrounds/grayex.jpg";

//pallets
import pal from "./icons/iconmonstr-paintbrush-7.svg";
import pal1 from "./icons/xBlue.png";
import pal2 from "./icons/xRed.png";
import pal3 from "./icons/xGreen.png";
import pal4 from "./icons/xGold.png";
import pal5 from "./icons/xGray.png";

// mid-Gallery
import sl10 from "./images/ext1.png";
import sl11 from "./images/ext2.png";
import sl12 from "./images/ext3.png";
import sl13 from "./images/ext12.jpg";
import bean from "./images/beanCounter.jpg";
import leftMural from "./images/extSide.png";
import rightMural from "./images/extSide2.png";

export default function Exteriors({ setBack, setPage, handleClick, sub1 }) {
  const location = useLocation();
  //reset background
  useEffect(() => {
    setBack("");
    setPage("Exteriors");
  }, [location, setBack, setPage]);

  const gallery = [sl8, sl6, sl1, sl2, sl3, sl7, sl9, sl4, sl5];
  const backgrounds = ["", blue, red, green, gold, gray];
  const paintbrushes = [pal, pal1, pal2, pal3, pal4, pal5];
  const list = [
    "major and minor preparation",
    "caulking",
    "complete weatherization",
    "remedial carpentry",
    "whole-structure undercoating",
    "primer/sealer",
    "final two coats (sprayed and rolled)",
    "urethane-enriched, acrylic paint ",
  ];
  const midgallery = [sl11, sl12, sl13, sl10];
  const p1 =
    " Expect the same meticulous care and detailed craftsmanship for which Liquid Disguise's interior work is known, when contracting us for your residential or commercial exterior project. ";

  return (
    <>
      <SlidingGallery gallery={gallery} />
      <Colors
        handleClick={handleClick}
        paintbrushes={paintbrushes}
        colors={backgrounds}
      />
      {/* subheaders */}
      <Subheaders
        sub1="Enjoy a beautiful exterior to your home or commercial property with painting by Liquid Disguise"
        sub2="In 2006, after more than 20 years of interior painting, Liquid Disguise was contracted by an international painting company to manage two exterior painting crews."
      />
      <Subheaders sub2="This annual contract was a quick and thorough immersion in exterior painting as we were sudddenly responsible for completing an average of 20 private and commercial properties each summer throughout New England. " />
      <Subheaders sub2="Since that time, exterior painting has been a continually larger component of Liquid Disguise's services. " />
      <Subheaders sub1="Liquid Disguise's exterior services include: " />
      {/* Display */}
      <Display
        // gallery className
        galleryName={"gallery"}
        // image classNames
        cName={"extGal"}
        // Display Body className
        styling={"ext-main-body"}
        // list
        list={list}
        // images
        midGallery={midgallery}
        //carousel
        carouselClass={"extCarousel"}
      />
      {/* middle-section */}
      {
        <section className="extBottom">
          <p className="p2">{p1}</p>

          <div className="extWrapper">
            <div className="extMural">
              <img src={bean} alt="image1" />

              <figcaption>
                The Bean Counter, Shrewsbury: a rehabilitated structure with a
                colorful painting treatment by Liquid Disguise.
              </figcaption>
            </div>
          </div>
        </section>
      }
      {
        <section className="extBottom">
          <p className="p2">{p1}</p>

          <div className="lowerExt">
            <div className="leftExtMural">
              <img src={leftMural} alt="image1" />
              <div>
                During repairs and after (top and bottom, respectively) of a
                private home that suffered water and weather damage. Liquid
                Disguise craftsmen's repair is invisible.
              </div>
            </div>
            <div className="rightExtMural">
              <img src={rightMural} alt="image2" />
              <div>
                Paint stripping and shingle replacement in a home repair.
              </div>
            </div>
          </div>
        </section>
      }
      <Closer
        sub1="To find out Liquid Disguises' exterior crew schedule and availability..."
        sub2={sub1}
      />
      {/* Footer */}
      <Footer />
    </>
  );
}
