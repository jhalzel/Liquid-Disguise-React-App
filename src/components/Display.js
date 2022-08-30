import React from "react";

// styles
import "../pages/Commercial/BusinessAndOffice/BusinessDisplay.css";
import "../pages/Commercial/ChurchesAndTemples/Churches.css";
import "../pages/Commercial/Exterior/Exterior.css";

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
