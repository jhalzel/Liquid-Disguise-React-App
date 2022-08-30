import React from "react";

// styles
import "../pages/business/Business.css";
import "../pages/churches/Churches.css";
import "../pages/exterior/Exterior.css";

// components
import MidGallery from "./MidGallery";
import FloatingList from "./FloatingList";

export default function Display({
  styling,
  cName,
  list,
  midGallery,
  galleryName,
  carouselClass,
}) {
  return (
    <>
      {/* variable className "style" */}
      <section className={styling}>
        {/* conditional styling of carousel */}
        <div className={carouselClass}>
          <FloatingList list={list} />
        </div>
        {/* conditional middle Gallery */}
        <section className={galleryName}>
          <MidGallery cName={cName} midGallery={midGallery} />
        </section>
      </section>
    </>
  );
}
