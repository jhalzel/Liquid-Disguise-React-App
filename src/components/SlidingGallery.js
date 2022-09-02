// @ts-nocheck
import React from "react";
import { useRef } from "react";

//icons
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

// components
import ImageList from "./ImageList";

export default function SlidingGallery({ gallery, cName }) {
  //refs
  const carousel = useRef(null);

  const scrollRight = (e) => {
    console.log("left");
    console.log(carousel.current);
    carousel.current.scrollBy({
      left: 435,
      behavior: "smooth",
    });
  };
  const scrollLeft = (e) => {
    console.log("left");
    console.log(carousel.current);
    carousel.current.scrollBy({
      left: -650,
      behavior: "smooth",
    });
  };

  return (
    <>
      <HiChevronDoubleLeft
        className='navLeft'
        onClick={(e) => {
          scrollLeft(e);
        }}
      />

      <HiChevronDoubleRight
        className='navRight'
        onClick={(e) => {
          scrollRight(e);
        }}
      />
      <section className='sliding-gallery' ref={carousel}>
        <ImageList gallery={gallery} cName={cName} />
      </section>
    </>
  );
}
