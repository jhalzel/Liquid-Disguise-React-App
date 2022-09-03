// @ts-nocheck
import React from "react";
import { useRef, useState, useEffect } from "react";

//icons
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

// components
import ImageList from "./ImageList";

export default function SlidingGallery({ gallery, cName }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    console.log(e.currentTarget.scrollLeft);
    var position = e.currentTarget.scrollLeft;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, handleScroll]);

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
      <section
        className='sliding-gallery'
        ref={carousel}
        onMouseOver={handleScroll}
      >
        <ImageList gallery={gallery} cName={cName} />
      </section>
    </>
  );
}
