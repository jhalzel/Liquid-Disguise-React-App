import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// styles
import "./Woodwork.css";

// components
import Closer from "../../components/Closer";
import Subheaders from "../../components/Subheaders";
import SlidingGallery from "../../components/SlidingGallery";
import Colors from "../../components/Colors";
import Footer from "../../components/Footer";
import Display from "../../components/Display";

export default function Business_Office({
  importAll,
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

  const slidingGallery = importAll(
    require.context(
      "../../assets/images/wdwrk_imgs/slider",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const backgrounds = importAll(
    require.context(
      "../../assets/backgrounds/woodwork",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  backgrounds.unshift("");

  const pallets = importAll(
    require.context(
      "../../assets/icons/woodwork_icons",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const midGallery = importAll(
    require.context("../../assets/images/wdwrk_imgs/gal1")
  );

  const midGallery2 = importAll(
    require.context("../../assets/images/wdwrk_imgs/gal2")
  );

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
      <SlidingGallery cName={"wood"} gallery={slidingGallery} />
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
        <Subheaders
          sub1={""}
          sub2="Liquid Disguise uses the following treatments & more:"
        />
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
