import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

//styles
import "./LivingRooms.css";

//components
import SlidingGallery from "../../components/SlidingGallery";
import Colors from "../../components/Colors";
import Subheaders from "../../components/Subheaders";
import Display from "../../components/Display";
import Closer from "../../components/Closer";
import Footer from "../../components/Footer";

export default function LivingRooms({
  importAll,
  setBack,
  setPage,
  handleClick,
  sub1,
}) {
  const location = useLocation();

  //reset background
  useEffect(() => {
    setBack("");
    setPage("Living Rooms");
  }, [location, setBack, setPage]);

  const slidingGallery = importAll(
    require.context(
      "../../assets/images/livRm_imgs/slider",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const pallets = importAll(
    require.context(
      "../../assets/icons/livingRoom_icons",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  pallets.push("");

  const colors = importAll(
    require.context(
      "../../assets/backgrounds/living rooms",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  colors.push("");

  const midGallery = importAll(
    require.context("../../assets/images/livRm_imgs/gal1")
  );

  const midGal2 = importAll(
    require.context("../../assets/images/livRm_imgs/gal2")
  );

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
      <SlidingGallery cName={"livGal"} gallery={slidingGallery} />
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
        <Subheaders
          sub1={""}
          sub2="Liquid Disguise uses the following treatments & more:"
        />
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
      <Closer sub1={sub1} sub2={""} />
      <Footer />
    </>
  );
}
