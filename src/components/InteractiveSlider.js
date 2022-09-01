import React, { useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

// styles
import "./InteractiveSlider.css";

export default function InteractiveSlider({ slides }) {
  //states
  const [cur, setCur] = useState(0);
  const [active, setActive] = useState("");
  const length = slides.length;

  const nextSlide = () => {
    // last image ? set image to first, else go to next image
    setCur(cur === length - 1 ? 0 : cur + 1);
    setActive("slide active1");
  };

  console.log(cur);

  const prevSlide = () => {
    // image is first ? go to last image, else go to previous image
    setCur(cur === 0 ? length - 1 : cur - 1);
    setActive("slide active2");
  };

  // error prevention
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <HiChevronDoubleLeft
        className="left-arrow"
        onClick={prevSlide}
        onMouseOver={(e) => (e.currentTarget.style.color = "limegreen")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(53, 53, 117)")}
      />
      <HiChevronDoubleRight
        className="right-arrow"
        onClick={nextSlide}
        onMouseOver={(e) => (e.currentTarget.style.color = "limegreen")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(53, 53, 117)")}
      />
      {/* loop through array of images */}
      {slides.map((slide, index) => {
        return (
          // conditional styling
          <div className={index === cur ? active : "slide"} key={index}>
            {/* if index is the current image number, place image */}
            {index === cur && (
              <img className="img" src={slide.image} alt="image" />
            )}
          </div>
        );
      })}
    </section>
  );
}
