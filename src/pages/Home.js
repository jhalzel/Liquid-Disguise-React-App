// @ts-nocheck
import React from "react";

import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

// components
import SlidingGallery from "../components/SlidingGallery";
import Colors from "../components/Colors";
import Subheaders from "../components/Subheaders";
import Display from "../components/Display";
import Closer from "../components/Closer";
import MidSection from "../components/MidSection";
import Footer from "../components/Footer";

export default function Home({
  importAll,
  setPage,
  setBack,
  handleClick,
  setLinkClick,
  sub1,
}) {
  // paintbrush images
  const paintbrushes = importAll(
    require.context("../assets/icons/home_icons", false, /\.(png|jpe?g|svg)$/)
  );

  const colors = importAll(
    require.context("../assets/backgrounds/home", false, /\.(png|jpe?g|svg)$/)
  );
  colors.unshift("");

  // slider gallery array
  const gallery = importAll(
    require.context(
      "../assets/images/home_imgs/slider",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const midGallery = importAll(
    require.context(
      "../assets/images/home_imgs/mid-section",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const woods = importAll(
    require.context(
      "../assets/images/home_imgs/mural",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  //set location variable
  const location = useLocation();

  //reset background on page switch
  useEffect(() => {
    setBack("");
    setPage("Home-Page");
  }, [location, setBack, setPage]);

  //link for contact animation
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
      {<SlidingGallery gallery={gallery} cName={"home-slider"} />}

      {/* color Pallets */}
      {
        <Colors
          handleClick={handleClick}
          colors={colors}
          paintbrushes={paintbrushes}
        />
      }
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
