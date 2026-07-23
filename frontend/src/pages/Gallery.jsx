import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  const images = [
    "/gallery/img1.jpeg",
    "/gallery/img2.jpeg",
    "/gallery/img3.jpeg",
    "/gallery/img4.jpeg",
  
    "/gallery/img6.jpeg",
    "/gallery/img7.jpeg",
    "/gallery/img8.jpeg",
    "/gallery/img9.jpeg",
    "/gallery/img10.jpeg",
    "/gallery/img11.jpeg",
    "/gallery/img12.jpeg",
    
    "/gallery/img14.jpeg",
    "/gallery/img15.jpeg",
    "/gallery/img16.jpeg",
    "/gallery/img17.jpeg",
    "/gallery/img18.jpeg",
    "/gallery/img19.jpeg",
    "/gallery/img20.jpeg",
    "/gallery/img21.jpeg",
    "/gallery/img22.jpeg",
    "/gallery/img23.jpeg",
   
    "/gallery/img25.jpeg",
    "/gallery/img26.jpeg",
    "/gallery/img27.jpeg",
    "/gallery/img28.jpeg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Navbar />

      <section className="gallery-page">

        <div className="gallery-title">
          <h4>OUR PROJECTS</h4>
          <h1>Gallery</h1>
          <p>
            Explore our premium Glass, Modular Kitchen,
            Wooden Work & Interior Projects.
          </p>
        </div>

        <div className="gallery-grid">

          {images.map((image, index) => (
            <div
              className="gallery-card"
              key={index}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}

        </div>

      </section>

      {selectedImage && (
        <div
          className="gallery-popup"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="popup-image"
          />
        </div>
      )}

      <Footer />
    </>
  );
}