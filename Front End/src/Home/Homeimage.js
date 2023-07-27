import React from 'react';
import './Homeimage.css';
import Contents from './Contents';
import { useState , useEffect } from 'react';

const Home = () => {
  const [index , setIndex] = useState(0);
  const images = [
    "best-health-insurance-plans.jpg",
    "health-insurance-0.jpeg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="split-page">
      <div className="image-section">
        <img src={images[index % images.length]} alt="health-insurance" width={600} height={400}/>
      </div>
      <Contents />
    </div>
  );
};

export default Home;
