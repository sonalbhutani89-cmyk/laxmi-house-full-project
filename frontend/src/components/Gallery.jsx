
export default function Gallery() {
  return (
    <section className="gallery">

      <div className="gallery-heading">

        <span>OUR WORK</span>

        <h2>Gallery Spotlight</h2>

        <p>
          Explore some of our premium interior projects completed
          with perfection and modern craftsmanship.
        </p>

      </div>

      <div className="gallery-grid">

        <div className="gallery-item large">
          <img src="https://tse3.mm.bing.net/th/id/OIP.XjhXg4gRQ1iBdF2g1w-ndwHaHa?pid=Api&P=0&h=180" alt="" />
          <div className="overlay">
            <h3>Glass Staircase</h3>
          </div>
        </div>

        <div className="gallery-item">
          <img src="https://tse1.mm.bing.net/th/id/OIP.ON2y60__lLYTnUD2k8FTSAHaEK?pid=Api&P=0&h=180" alt="" />
          <div className="overlay">
            <h3>Luxury Kitchen</h3>
          </div>
        </div>

        <div className="gallery-item">
          <img src="https://www.gpwih.com/wp-content/uploads/2018/03/large-wooden-wardrobes-in-fashionable-collections-u003e-trafalgar-bedroom-u003e-large-cherry-wood-3-door.jpg" alt="" />
          <div className="overlay">
            <h3>Wooden Wardrobe</h3>
          </div>
        </div>

        <div className="gallery-item">
          <img src="https://tse2.mm.bing.net/th/id/OIP.xgWCJ28ds-A1ledKdyC0aQHaHa?pid=Api&P=0&h=180" alt="" />
          <div className="overlay">
            <h3>Premium Glass</h3>
          </div>
        </div>

        <div className="gallery-item large">
          <img src="https://tse1.mm.bing.net/th/id/OIP.QhfKfabJcOXlmXNA2cnPygHaEz?pid=Api&P=0&h=180" alt="" />
          <div className="overlay">
            <h3>Interior Design</h3>
          </div>
        </div>

      </div>

    </section>
  );
}