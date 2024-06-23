// @ts-nocheck
import React from "react";

import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

// components
import SlidingGallery from "../../components/SlidingGallery";
import Colors from "../../components/Colors";
import Subheaders from "../../components/Subheaders";
import Display from "../../components/Display";
import Closer from "../../components/Closer";
import FloatingList from "../../components/FloatingList";
import Footer from "../../components/Footer";
import InteractiveSlider from "../../components/InteractiveSlider";
import { SliderData } from "./homeIntSliderData";

export default function Home({
  ref,
  importAll,
  setPage,
  setBack,
  handleClick,
  setLinkClick,
  sub1,
}) {
  // paintbrush images
  const paintbrushes = importAll(
    require.context(
      "../../assets/icons/home_icons",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const colors = importAll(
    require.context(
      "../../assets/backgrounds/home",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  colors.unshift("");

  // slider gallery array
  const gallery = importAll(
    require.context(
      "../../assets/images/home_imgs/slider",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const midGallery = importAll(
    require.context(
      "../../assets/images/home_imgs/mid-section",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  console.log("midGallery:", midGallery);

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

  const captions = [
    "Stevie-Wonder Portrait, dedicated to our dear friend Jerry",
    "An abstract portrait inspired by home objects",
    "Classic Fruit portrait with pastels",
    "Symmetrical birds on the vine",
    "'The first thing everyone says about the mural you painted for us is, 'wow!' Especially the birches, came out perfectly.' —Steve and Sue McConnell, Marlboro, Mass",
  ];

  return (
    <>
      {<SlidingGallery gallery={gallery} cName={"home-slider"} />}

      {/* color Pallets */}
      {
        <Colors
          setBack={setBack}
          handleClick={handleClick}
          colors={colors}
          paintbrushes={paintbrushes}
        />
      }
      {/* subheaders */}
      <Subheaders
        sub1="Thank you for visiting New England's choice for custom interior and
    exterior painting since 1994!"
        sub2='Liquid Disguise Custom Decorative Painting of New England, has a record of
        excellence in all types of painting projects, including:'
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
      <Subheaders
        sub1={""}
        sub2={
          "Through the craftsmanship of painting, and the most current painttechnology Liquid Disguise transforms surfaces with better costefficiancy:"
        }
      />
      {
        <section className='bottom'>
          <FloatingList
            list={[
              <h4>Pine can be made to look like cherry</h4>,
              <h4>
                Formica can fool the eye into believing it's seeing granite
              </h4>,
              <h4>Plaster columns can be taken for marble</h4>,
            ]}
          />
        </section>
      }
      <section className='interactive'>
        <div className='slideContainer'>
          {" "}
          <InteractiveSlider slides={SliderData} caption={captions} />
        </div>
      </section>

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
