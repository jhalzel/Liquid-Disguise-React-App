import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

//components
import Colors from "../../components/Colors";
import SlidingGallery from "../../components/SlidingGallery";
import Subheaders from "../../components/Subheaders";
import Display from "../../components/Display";
import Closer from "../../components/Closer";
import Footer from "../../components/Footer";

export default function Exteriors({
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
    setPage("Exteriors");
  }, [location, setBack, setPage]);

  const gallery = importAll(
    require.context(
      "../../assets/images/ext_imgs/slider",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const backgrounds = importAll(
    require.context(
      "../../assets/backgrounds/exteriors",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  backgrounds.push("");

  const paintbrushes = importAll(
    require.context(
      "../../assets/icons/exterior_icons",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  paintbrushes.push("");

  const midgallery = importAll(
    require.context("../../assets/images/ext_imgs/mid-section")
  );

  const bean = importAll(
    require.context("../../assets/images/ext_imgs/mural-1")
  );

  const mural = importAll(
    require.context("../../assets/images/ext_imgs/mural-2")
  );

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

  const p1 =
    " Expect the same meticulous care and detailed craftsmanship for which Liquid Disguise's interior work is known, when contracting us for your residential or commercial exterior project. ";

  return (
    <>
      <SlidingGallery cName={"extGal"} gallery={gallery} />
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
      <Subheaders
        sub1={""}
        sub2="This annual contract was a quick and thorough immersion in exterior painting as we were sudddenly responsible for completing an average of 20 private and commercial properties each summer throughout New England. "
      />
      <Subheaders
        sub1={""}
        sub2="Since that time, exterior painting has been a continually larger component of Liquid Disguise's services. "
      />
      <Subheaders
        sub1="Liquid Disguise's exterior services include: "
        sub2={""}
      />
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
              <img src={mural[0]} alt="image1" />
              <div>
                During repairs and after (top and bottom, respectively) of a
                private home that suffered water and weather damage. Liquid
                Disguise craftsmen's repair is invisible.
              </div>
            </div>
            <div className="rightExtMural">
              <img src={mural[1]} alt="image2" />
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
