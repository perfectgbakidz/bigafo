import React, { useState, useEffect } from 'react';

const galleryImages = [
    { src: "https://i.imgur.com/rDlcM5I.png", alt: "Temitope Afolabi (Big Afo) official portrait" },
    { src: "https://i.imgur.com/vv7e0S0.jpeg", alt: "MAPOLY Campus" },
    { src: "https://i.imgur.com/te7TqnX.png", alt: "AFO Vision 2025 Logo" },
    { src: "https://i.imgur.com/OEzvcWz.png", alt: "Connect with AFO Campaign icon" },
    { src: "https://i.imgur.com/NrvR8Hc.png", alt: "Declaration of Intent icon" },
    { src: "https://i.imgur.com/3VYUtbZ.jpg", alt: "Big Afo with supporters" },
    { src: "https://i.imgur.com/yfJqMYO.jpg", alt: "Big Afo speaking at an event" },
    { src: "https://i.imgur.com/RXcLlgp.jpg", alt: "Big Afo engaging with students" },
    { src: "https://i.imgur.com/rUmoQsS.jpg", alt: "Campaign team photo" },
    { src: "https://i.imgur.com/AYUA1Ds.jpeg", alt: "Temitope Afolabi (Big Afo) in a thoughtful pose" },
    { src: "https://i.imgur.com/YaFrz4u.jpeg", alt: "Temitope Afolabi (Big Afo) campaign photo" },
    { src: "https://i.imgur.com/topeTys.jpeg", alt: "A professional headshot of Temitope Afolabi (Big Afo)" },
];

const GalleryIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-mapoly-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);


const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 2500); // Auto-scroll every 2.5 seconds

    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="gallery" className="py-20 bg-mapoly-light overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <div className="mx-auto bg-mapoly-gold/20 rounded-full h-32 w-32 flex items-center justify-center mb-6">
                <GalleryIcon />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-mapoly-green mb-4">
                BIG AFO Gallery
            </h2>
            <div className="w-24 h-1 bg-mapoly-gold mx-auto"></div>
            <p className="max-w-3xl mx-auto mt-4 text-gray-600">
                A collection of moments and visuals from the campaign trail.
            </p>
        </div>
        
        <div className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center" style={{ perspective: '1000px' }}>
          <div className="absolute w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
            {galleryImages.map((image, index) => {
              const offset = (index - currentIndex + galleryImages.length) % galleryImages.length;
              const isCenter = index === currentIndex;
              const isLeft = offset === galleryImages.length - 1;
              const isRight = offset === 1;

              let transform = 'translateX(0) translateZ(-300px) rotateY(0) scale(0.7)';
              let filter = 'blur(4px)';
              let opacity = 0;
              let zIndex = 1;
              
              if (isCenter) {
                transform = 'translateX(0) translateZ(150px) rotateY(0) scale(1)';
                filter = 'blur(0px)';
                opacity = 1;
                zIndex = galleryImages.length;
              } else if (isLeft) {
                transform = 'translateX(-60%) translateZ(-50px) rotateY(45deg) scale(0.85)';
                filter = 'blur(2px)';
                opacity = 0.7;
                zIndex = galleryImages.length - 1;
              } else if (isRight) {
                transform = 'translateX(60%) translateZ(-50px) rotateY(-45deg) scale(0.85)';
                filter = 'blur(2px)';
                opacity = 0.7;
                zIndex = galleryImages.length - 1;
              }

              return (
                <div 
                  key={index} 
                  className="absolute w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out"
                  style={{ 
                    transform, 
                    filter, 
                    opacity,
                    zIndex
                  }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-auto h-full max-h-[250px] md:max-h-[400px] object-contain rounded-lg shadow-2xl bg-white/20 p-2"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;