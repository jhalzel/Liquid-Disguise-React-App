import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// styles
import "./Bathroom.css";

// components
import SlidingGallery from "../../components/SlidingGallery";
import Colors from "../../components/Colors";
import Subheaders from "../../components/Subheaders";
import FloatingList from "../../components/FloatingList";
import Closer from "../../components/Closer";
import Footer from "../../components/Footer";

export default function Bedrooms({
  importAll,
  setBack,
  handleClick,
  setPage,
  sub1,
}) {
  const slidingGal = importAll(
    require.context(
      "../../assets/images/bath_imgs/slider",
      false,
      /\.(png|jpe?g|svg|JPG)$/
    )
  );

  const midGallery = importAll(
    require.context(
      "../../assets/images/bath_imgs/midsection",
      false,
      /\.(png|jpe?g|svg|JPG)$/
    )
  );

  const backgrounds = importAll(
    require.context(
      "../../assets/backgrounds/bathrooms",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  backgrounds.unshift("");

  const pallets = importAll(
    require.context(
      "../../assets/icons/bathroom_icons",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const location = useLocation();
  //reset background
  useEffect(() => {
    setBack("");
    setPage("Bathrooms");
  }, [location, setBack, setPage]);

  const list = [
    <h4>custom decorative painting </h4>,
    <h4>classic and contemporary effects</h4>,
    <h4>unlimited variations and styles</h4>,
    <h4>mold & mildew prevention</h4>,
  ];

  return (
    <>
      <SlidingGallery cName={"bathGal"} gallery={slidingGal} />
      <Colors
        handleClick={handleClick}
        paintbrushes={pallets}
        colors={backgrounds}
        setBack={setBack}
      />
      {/* subheaders */}
      <Subheaders
        sub1="Wonderful master bedrooms, boudoirs, children's rooms with painting by Liquid Disguise"
        sub2=" Each room to its own personality. Every bedroom can be uniquely designed (maybe with its own theme?). Let your bedrooms tell their very own bed-time stories through custom decorative treatments."
      />
      {
        <section className="bathGallery">
          {midGallery.map((item, index) => {
            return (
              <div key={index}>
                <img src={item} alt="" />
              </div>
            );
          })}
        </section>
      }
      <Subheaders
        sub1={""}
        sub2={
          "If you have children, it's great for them to be part of the design and color choices ... so that as the room is transformed, they feel pride and ownership of it. "
        }
      />
      <Subheaders
        sub1={""}
        sub2={
          "Liquid Disguise has even heard from more than one customer that their children took better care of their rooms after a make-over. Call today for a free consultation and estimate. "
        }
      />
      <Subheaders sub1={"Liquid Disguise can transform with: "} sub2={""} />
      {
        <section className="bathBottom">
          <FloatingList list={list} />
        </section>
      }
      <Closer sub1={sub1} sub2={""} />
      <Footer />
    </>
  );
}
