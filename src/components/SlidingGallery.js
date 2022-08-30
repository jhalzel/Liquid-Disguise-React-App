import React from "react";

// components
import ImageList from "./ImageList";

export default function SlidingGallery({ gallery, cName }) {
  return (
    <div>
      <section className="sliding-gallery">
        <ImageList gallery={gallery} cName={cName} />
      </section>
      <h4 id="subtitle">Custom Decorative Painting of New England </h4>
    </div>
  );
}
