import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import Subheaders from "../../components/Subheaders";
import SlidingGallery from "../../components/SlidingGallery";
import Colors from "../../components/Colors";
import Footer from "../../components/Footer";
import FloatingList from "../../components/FloatingList";
import Closer from "../../components/Closer";
import Display from "../../components/Display";

export default function Churches({
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
    setPage("Houses of Worship");
  }, [location, setBack, setPage]);

  const slidingGal = importAll(
    require.context(
      "../../assets/images/church_imgs/slider",
      false,
      /\.(png|jpe?g|svg|JPG)$/
    )
  );

  const paintbrushes = importAll(
    require.context(
      "../../assets/icons/church_icons",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const colors = importAll(
    require.context(
      "../../assets/backgrounds/churches",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  colors.unshift("");

  const midGallery = importAll(
    require.context("../../assets/images/church_imgs/mid-gal")
  );

  const waterDamage = importAll(
    require.context("../../assets/images/church_imgs/mural")
  );

  const list = [
    "Water, mold, mildew",
    "smoke fire damaged walls",
    "Ceilings and cabinetry repaired",
    "Icons painted and refurbished",
    "Guilding",
    "Liturgical artwork and murals",
    "Restoration/repainting",
    "nativity sets and stations of the cross",
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
        setBack={setBack}
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
        <div className='lowerSection'>
          <section className='churchMural'>
            <div>
              <img src={waterDamage[0]} alt='image1' />
              <h5>{fig1}</h5>
            </div>
            <div>
              <img src={waterDamage[1]} alt='image2' />
              <h5>{fig2}</h5>
            </div>
          </section>
        </div>
      }
      {
        <section className='satisfied'>
          <Subheaders
            sub1={""}
            sub2={
              "Some of the churches and synagogues that have utilized Liquid Disguise's expertise include: "
            }
          />
          <div className='churchSideways'>
            <FloatingList list={satList} />
          </div>
          <div className='churchSideways2'>
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
