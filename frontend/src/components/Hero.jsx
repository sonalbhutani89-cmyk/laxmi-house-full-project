import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Hero() {

  const images = [
    "/slider-img1.jpg",
    "/slider-img2.jpg",
    "/slider-img3.webp",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) => (prev + 1) % images.length);

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section
      className="hero"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >

      <div className="hero-overlay">

        <div className="hero-content">

          <h3>WELCOME TO</h3>

          <h1>LAXMI GLASS HOUSE</h1>

          <p>
            Premium Glass • Modular Kitchen • Wooden Work •
            Hardware • Interior Solutions
          </p>

       <div className="hero-buttons">

  <Link to="/gallery">
    <button className="hero-btn">
      Explore Gallery
    </button>
  </Link>

  <Link to="/contact">
    <button className="hero-btn-outline">
      Contact Us
    </button>
  </Link>

</div>

        </div>

      </div>

    </section>

  );
}