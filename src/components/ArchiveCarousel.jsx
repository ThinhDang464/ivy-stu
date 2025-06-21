import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";

// It's cleaner to manage your images in an array
const images = [
  { id: "archive1", src: "/archive1.png", alt: "archive 1" },
  { id: "archive2", src: "/archive2.png", alt: "archive 2" },
  { id: "archive3", src: "/archive3.png", alt: "archive 3" },
  { id: "archive4", src: "/archive4.png", alt: "archive 4" },
];

const ArchiveCarousel = () => {
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
          <div className="embla__slide" key={img.id}>
            <Link to={`/project/${img.id}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover"
                draggable="false" // Good practice to prevent ghosting
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchiveCarousel;
