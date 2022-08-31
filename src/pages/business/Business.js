import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import Closer from "../../components/Closer";
import Subheaders from "../../components/Subheaders";
import SlidingGallery from "../../components/SlidingGallery";
import Colors from "../../components/Colors";
import Footer from "../../components/Footer";
import Display from "../../components/Display";
import FloatingList from "../../components/FloatingList";

export default function Business_Office({
  importAll,
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

  const slidingGallery = importAll(
    require.context(
      "../../assets/images/bus_imgs/slider",
      false,
      /\.(png|jpe?g|svg|JPG)$/
    )
  );
  const backgrounds = importAll(
    require.context(
      "../../assets/backgrounds/commercial",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  backgrounds.unshift("");

  const pallets = importAll(
    require.context(
      "../../assets/icons/business_icons",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const midGallery = importAll(
    require.context("../../assets/images/bus_imgs/mid-gal1")
  );

  const midGallery2 = importAll(
    require.context("../../assets/images/bus_imgs/mid-gal2")
  );

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
      <SlidingGallery cName={"slBusGal"} gallery={slidingGallery} />
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
            sub2={""}
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
