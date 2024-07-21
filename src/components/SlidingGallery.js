// @ts-nocheck
import React, { useRef, useEffect, useState } from "react";


//icons
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

// components
import ImageList from "./ImageList";

export default function SlidingGallery({ gallery, cName }) {
  //refs
  const carousel = useRef(null);
  const divRefs = useRef([]);

  // State to store the width of each child element
  const [divWidth, setDivWidth] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const [imgFittings, setImgFittings] = useState(0);

  // Disable native scrolling
  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
      }
    };

    if (carousel.current) {
      carousel.current.addEventListener("wheel", handleWheel);
    }

    return () => carousel.current ? carousel.current.removeEventListener("wheel", handleWheel) : undefined;

  }, []);

  
  // UseEffect to get the width of the first child element
  useEffect(() => {


      // Function to update page width
    const updatePageWidth = () => {
      setPageWidth(window.innerWidth);
      setImgFittings((pageWidth / divWidth).toFixed(0));
    };

    // Call it once to set initial width
    updatePageWidth();

    // Add event listener for window resize
    window.addEventListener('resize', updatePageWidth);

    if (divRefs.current.length > 0) {
      const firstDivWidth = divRefs.current[0].offsetWidth;
      setDivWidth(firstDivWidth);
    }

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', updatePageWidth);
    };
    }, [setDivWidth, setPageWidth, pageWidth, setImgFittings]);

    const scrollRight = (e) => {
      carousel.current.scrollBy({
        left: divWidth * imgFittings,
        behavior: "smooth",
      });
  };


  const scrollLeft = (e) => {
    console.log(carousel.current);
    carousel.current.scrollBy({
      left: -divWidth * imgFittings,
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
      <section className='sliding-gallery' ref={carousel} >
        <ImageList gallery={gallery} cName={cName} divRefs={divRefs}/> 
      </section>
    </>
  );
}
