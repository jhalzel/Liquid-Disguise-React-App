import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// styles
import "./Bedroom.css";

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
  const location = useLocation();

  //reset background
  useEffect(() => {
    setBack("");
    setPage("Bedrooms");
  }, [location, setBack, setPage]);

  const slidingGal = importAll(
    require.context(
      "../../assets/images/bedr_imgs/slider",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const backgrounds = importAll(
    require.context(
      "../../assets/backgrounds/bedrooms",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  backgrounds.push("");

  const pallets = importAll(
    require.context(
      "../../assets/icons/bedroom_icons",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  pallets.push("");

  const midGallery = importAll(
    require.context("../../assets/images/bedr_imgs/midsection")
  );

  const list = [
    <h4>faux finishes</h4>,
    <h4>favorite colors</h4>,
    <h4>patterns</h4>,
    <h4>graphix</h4>,
    <h4>murals</h4>,
    <h4>lettering</h4>,
  ];

  return (
    <>
      <SlidingGallery cName={"bedGal"} gallery={slidingGal} />
      <Colors
        handleClick={handleClick}
        paintbrushes={pallets}
        colors={backgrounds}
      />
      {/* subheaders */}
      <Subheaders
        sub1="Wonderful master bedrooms, boudoirs, children's rooms with painting by Liquid Disguise"
        sub2=" Each room to its own personality. Every bedroom can be uniquely designed (maybe with its own theme?). Let your bedrooms tell their very own bed-time stories through custom decorative treatments."
      />
      {
        <section className="bedGallery">
          {midGallery.map((item, index) => {
            return (
              <div key={index}>
                <img src={item} alt="" />
              </div>
            );
          })}
        </section>
      }
      <Subheaders sub2="If you have children, it's great for them to be part of the design and color choices ... so that as the room is transformed, they feel pride and ownership of it. " />
      <Subheaders sub2="Liquid Disguise has even heard from more than one customer that their children took better care of their rooms after a make-over. Call today for a free consultation and estimate. " />
      <Subheaders sub1="Liquid Disguise can transform with: " />
      {
        <section className="bedBottom">
          <FloatingList list={list} />
        </section>
      }
      <Closer sub1={sub1} />
      <Footer />
    </>
  );
}
