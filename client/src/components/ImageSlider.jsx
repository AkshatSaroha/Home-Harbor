import { useState, useEffect } from 'react';



const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    // '../public/HomePage.jpg',
    // '../public/HomePage.jpg',
    // '../public/HomePage.jpg',
    // '../public/HomePage.jpg',
    // '../public/HomePage.jpg',
    'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg',
    'https://i.pinimg.com/564x/13/83/d6/1383d6336bb755be013f42eb38fee947.jpg',
    'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',
    'https://i.pinimg.com/564x/76/48/37/764837c4c0af759eb6d775230fbdb7f0.jpg',
    'https://i.pinimg.com/564x/17/fd/11/17fd11cad08c809cd46559bee5ddb935.jpg'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [images.length]); 

  return (
    <div className="image-slider flex items-center justify-center h-80 mt-0 mb-4">
      
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="w-full h-80 object-cover"
      />
    </div>

  );
};

export default ImageSlider;
