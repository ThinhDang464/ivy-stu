// src/components/ImageCarousel.jsx

import React from "react";
import useEmblaCarousel from "embla-carousel-react";

// It's cleaner to manage your images in an array
const images = [
  { src: "/project1.png", alt: "Nookscape Interior Studio" },
  { src: "/project2.png", alt: "Love Now Never Later" },
  { src: "/project3.png", alt: "Love Now Never Later" },
  { src: "/project4.png", alt: "Melodicity Music App" },
  { src: "/project6.png", alt: "Project Five" },
  { src: "/project5.png", alt: "Project Six" },
];

const ImageCarousel = () => {
  // Embla's main hook. It gives us a ref to attach to our carousel viewport.
  // We can pass options here. We'll set loop to true.
  // Autoplay is off by default, so we don't need to configure that.
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start", // Aligns slides to the start of the container
  });

  return (
    // The main viewport. We attach the ref here.
    <div className="embla" ref={emblaRef}>
      {/* The container that holds all the slides */}
      <div className="embla__container">
        {/* We map over the images array to create each slide */}
        {images.map((img, index) => (
          <div className="embla__slide" key={index}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover"
              draggable="false" // Good practice to prevent ghosting
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
