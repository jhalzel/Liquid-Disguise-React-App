import React from "react";

import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

// components
import SlidingGallery from "../../components/SlidingGallery";
import Colors from "../../components/Colors";
import Subheaders from "../../components/Subheaders";
import Display from "../../components/Display";
import Closer from "../../components/Closer";
import MidSection from "../../components/MidSection";
import Footer from "../../components/Footer";

// gallery
import g1 from "./images/IMG_2282.jpg";
import g2 from "./images/IMG_0467.jpg";
import g3 from "./images/IMG_0052.jpg";
import g4 from "./images/IMG_1490.jpg";
import g5 from "./images/IMG_2221.jpg";
import g6 from "./images/IMG_1705.jpg";
import g7 from "./images/IMG_0691.jpg";
import g8 from "./images/IMG_1251.jpg";
import g9 from "./images/IMG_1746.jpg";

// paintbrushes
import paintbrush1 from "./icons/iconmonstr-paintbrush-7.svg";
import paintbrush2 from "./icons/Mask group-2.svg";
import paintbrush3 from "./icons/iconmonstr-paintbrush-6 2.svg";
import paintbrush4 from "./icons/Mask group.svg";
import paintbrush5 from "./icons/iconmonstr-paintbrush-6 4.svg";
import paintbrush6 from "./icons/Mask group-1.svg";

// images
import green from "./images/green.jpg";
import silver from "./images/blue.jpg";
import red from "./images/red.jpg";
import gold from "./images/gold.jpg";
import gray from "./images/Gray.jpg";
import woods from "./images/woods_mural_large.jpg";

// Mid-Gallery
import gallery1 from "./images/blue-jay.jpg";
import gallery2 from "./images/columns.jpg";
import gallery3 from "./images/black.JPG";
import gallery4 from "./images/largeChurch.jpg";

// paintbrush images
const paintbrushes = [
  paintbrush1,
  paintbrush2,
  paintbrush3,
  paintbrush4,
  paintbrush5,
  paintbrush6,
];

export default function Home({
  setPage,
  setBack,
  handleClick,
  setLinkClick,
  sub1,
}) {
  //set location variable
  const location = useLocation();

  //reset background on page switch
  useEffect(() => {
    setBack("");
    setPage("Home-Page");
  }, [location, setBack, setPage]);

  //contact button
  const contact = (
    <span
      style={{
        color: "blue",
        cursor: "pointer",
        textDecoration: "underline",
      }}
      onMouseOver={(e) => (e.currentTarget.style.color = "limegreen")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "blue")}
      onClick={() => {
        var cont = document.getElementsByClassName("contact-com-wrapper")[0];
        var letters = document.getElementsByClassName("contact")[0];
        if (
          !cont.classList.contains("contact-com-wrapper2") &&
          !letters.classList.contains("contact2")
        ) {
          cont.classList.add("contact-com-wrapper2");
          letters.classList.add("contact2");
        }
        setTimeout(() => {
          cont.classList.remove("contact-com-wrapper2");
          letters.classList.remove("contact2");
          // console.log("animation done");
        }, 2000);
      }}
    >
      contact
    </span>
  );

  const colors = ["", silver, red, green, gold, gray];

  // gallery array
  const gallery = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

  const midGallery = [gallery1, gallery2, gallery3, gallery4];

  const lin = (
    <Link
      to={"/contact/#about"}
      onMouseOver={(e) => (e.currentTarget.style.color = "limegreen")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "blue")}
      onClick={() => setLinkClick(true)}
    >
      Liquid Disguise&copy;
    </Link>
  );

  const list = [
    "Commercial and residential exteriors",
    "Special effects",
    "Interior and exterior painting",
    "Murals",
    "Multi-fleck (color) sprays",
    "The restoration of historic buildings",
    "Faux finishes",
    "Furniture, cabinet and countertop restoration",
    "Art and illustration",
    "Marbleizing and faux bois (wood graining)",
    "Custom decorative painting",
    "Wall graphix graffiti lettering and logos",
    "Portraits",
    "Venetian plaster and lustrestone",
    "Trompe l'oeil",
    "Metallic paint and leaf application",
    "Fine architectural finishes",
    "Ornamental stenciling and liturgical artwork",
  ];

  return (
    <>
      <SlidingGallery gallery={gallery} cName={"home-slider"} />
      {/* color Pallets */}
      <Colors
        handleClick={handleClick}
        colors={colors}
        paintbrushes={paintbrushes}
      />
      {/* subheaders */}
      <Subheaders
        sub1="Thank you for visiting New England's choice for custom interior and
    exterior painting since 1994!"
        sub2="Liquid Disguise Custom Decorative Painting of New England, has a record of
        excellence in all types of painting projects, including:"
      />
      {/* Display */}
      <Display
        // Display Body className
        styling={"main-body"}
        // gallery className
        galleryName={"gallery"}
        // image classNames
        cName={"homeGal"}
        // list
        list={list}
        // images
        midGallery={midGallery}
        //carousel
        carouselClass={"carousel"}
      />
      {/* middle-section */}
      <MidSection
        // image
        woods={woods}
        // paragraph
        p1="Through the craftsmanship of painting, and the most current paint
            technology Liquid Disguise transforms surfaces with better cost
            efficiancy:
          "
        //figcaption for image
        fig="'The first thing everyone says about the mural you painted for us
            is, 'wow!' It far exceeds our expectations! The trees, especially
            the birches, came out perfectly.' —Steve and Sue McConnell,
            Marlboro, Mass "
        // list
        list={[
          "Pine can be made to look like cherry",
          "Formica can fool the eye into believing it's seeing granite",
          "Plaster columns can be taken for marble",
        ]}
      />
      {/* Closing paragraphs */}
      <Closer
        sub1={sub1}
        sub2={
          <>
            {lin} is dedicated to extensive and continual training of our
            painters, is committed to craftsmanship, and provides you an
            unconditional guarantee, so that, like hundreds of other New
            Englanders, you'll be glad you chose Liquid Disquise for your custom
            painting project!
          </>
        }
      />
      {/* Footer */}
      <Footer />
    </>
  );
}
