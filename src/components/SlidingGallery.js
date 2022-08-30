import React from "react";

// components
import ImageList from "./ImageList";

export default function SlidingGallery({ gallery, cName }) {
  return (
    <div>
      <section className="sliding-gallery">
        <ImageList gallery={gallery} cName={cName} />
      </section>
    </div>
  );
}
