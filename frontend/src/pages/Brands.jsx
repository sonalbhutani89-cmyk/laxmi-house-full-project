import Navbar from "../components/Navbar";
 import Footer from "../components/Footer";

export default function Brands() {
  return (
    <>
      <Navbar />

      <section className="brands">

        <div className="brands-heading">

          <span>TRUSTED BRANDS</span>

          <h2>Brands We Deal In</h2>

          <p>
            We proudly work with India's leading interior and hardware brands.
          </p>

        </div>

        <div className="brands-slider">

          <div className="brands-track">

            <div className="brand-card">
              <img src="logo/kitply.webp" alt="Kitply" />
            </div>

            <div className="brand-card">
              <img src="logo/fevicol-logo.webp" alt="Fevicol" />
            </div>

            <div className="brand-card">
              <img src="logo/godrejlogo.webp" alt="Kitply" />
            </div>

            <div className="brand-card">
              <img src="logo/greenlamlogo.webp" alt="greenlam" />
            </div>

            <div className="brand-card">
              <img src="logo/saint-gobain-logo.webp" alt="saint-gobain" />
            </div>

           

            {/* Repeat for smooth scrolling */}

           <div className="brand-card">
              <img src="logo/kitply.webp" alt="Kitply" />
            </div>

            <div className="brand-card">
              <img src="logo/fevicol-logo.webp" alt="Fevicol" />
            </div>

            <div className="brand-card">
              <img src="logo/godrejlogo.webp" alt="Kitply" />
            </div>

            <div className="brand-card">
              <img src="logo/greenlamlogo.webp" alt="greenlam" />
            </div>

            <div className="brand-card">
              <img src="logo/saint-gobain-logo.webp" alt="saint-gobain" />
            </div>

          </div>

        </div>

      </section>

       <Footer />

    </>
  );
}