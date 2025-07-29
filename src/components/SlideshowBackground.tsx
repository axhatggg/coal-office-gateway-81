
import { useState, useEffect } from "react";

const SlideshowBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "/lovable-uploads/cb37ddb3-e685-4446-8ad9-ac1b6678be42.png",
    "/lovable-uploads/81a47027-e775-4884-a05e-847cf1d51047.png",
    "/lovable-uploads/ff68df60-0a42-4657-a0fb-67a9bfbd04e5.png",
    "/lovable-uploads/e2574d69-f11b-4c8c-baae-bc90f6c413e3.png",
    "/lovable-uploads/df5df553-ef1b-46b9-bb21-870d26de0543.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute top-0 left-0 w-full h-[60vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {/* Enhanced gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/30 via-slate-50/50 to-slate-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent"></div>
    </div>
  );
};

export default SlideshowBackground;
