import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

//styles
import "./Kitchen.css";

// components
import Subheaders from "../../components/Subheaders";
import SlidingGallery from "../../components/SlidingGallery";
import Colors from "../../components/Colors";
import FloatingList from "../../components/FloatingList";
import Closer from "../../components/Closer";
import Footer from "../../components/Footer";

export default function Kitchen({
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
    setPage("Kitchen & Dining");
  }, [location, setBack, setPage]);

  const slidinggallery = importAll(
    require.context(
      "../../assets/images/kitch_imgs/slider",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const pallets = importAll(
    require.context(
      "../../assets/icons/kitchen_icons",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  pallets.push("");

  const backgrounds = importAll(
    require.context(
      "../../assets/backgrounds/kitchens",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  backgrounds.push("");

  const midGal = importAll(
    require.context("../../assets/images/kitch_imgs/mural")
  );

  const list1 = [
    "decorative rag rolling",
    "sponge painting techniques",
    "elegant marblizing, granitizing ",
    "wood grain simulation",
    "textured finishes",
    "custom stenciling",
    "custom murals          ",
    "decorative patterns and motifs",
    "subtle textures and designs  ",
    "beautiful color washes  ",
    "murals and lettering  ",
    "hand-painted tiles   ",
    "wood staining, antiquing and aging    ",
    "decorations in every style",
    "old world ambience to contemporary",
    "faux finishes",
  ];

  const list2 = [
    "walls",
    "ceilings and floors",
    "windows and doors",
    "trim and woodwork",
    "cabinets",
    "built-ins",
    "countertops",
    "furniture",
  ];
  return (
    <>
      <SlidingGallery gallery={slidinggallery} cName={"k"} />
      <Colors
        colors={backgrounds}
        paintbrushes={pallets}
        handleClick={handleClick}
      />
      <Subheaders
        sub1={
          "Your beautiful kitchen enhanced with painting by Liquid Disguise"
        }
        sub2={
          "The kitchen and dining areas are often the most vital spaces of your home, which make them the perfect settings to remind people of family, bounty, good times and great feasts."
        }
      />
      <Subheaders
        sub1={""}
        sub2={
          "And Liquid Disguise has the right ingredients to help whip up such delectable painted areas of your home: "
        }
      />
      {
        <section className="kDisplay">
          {/* conditional styling of carousel */}
          <div className="kCarousel">
            <FloatingList list={list1} />
          </div>
          {/* conditional middle Gallery */}
          <section className="kGallery">
            <div>
              <img src={midGal[0]} alt="image1" />
              <h5>
                "In the process of how Liquid Disguise&copy; creates the
                elegance of hand-painted striping in a dining room."
              </h5>
            </div>
            <div>
              <img src={midGal[1]} alt="image2" />
              <h5>
                "Finished hand-painted striping job by Liquid Disguise&copy;"
              </h5>
            </div>
          </section>
        </section>
      }
      <Subheaders
        sub1={""}
        sub2={"Liquid Disguise creates decorative painted finishes on: "}
      />
      <section className="satisfied">
        {" "}
        <div className="kSidewaysList">
          <FloatingList list={list2} />
        </div>
      </section>
      <Closer sub1={sub1} sub2={""} />
      <Footer />
    </>
  );
}
