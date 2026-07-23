export default function Reviews() {
  const reviews = [
    {
      name: "Rahul Sharma",
      city: "Sarkaghat",
      review:
        "Excellent glass quality and professional installation. Highly recommended for modular kitchen work.",
      rating: "★★★★★",
    },
    {
      name: "Priya Verma",
      city: "Mandi",
      review:
        "Very satisfied with the wooden work and premium hardware. Amazing finishing and affordable price.",
      rating: "★★★★★",
    },
    {
      name: "Amit Thakur",
      city: "Hamirpur",
      review:
        "Best experience with Laxmi Glass House. The team completed the work on time with great quality.",
      rating: "★★★★★",
    },
    {
      name: "Neha Kapoor",
      city: "Bilaspur",
      review:
        "Beautiful glass partitions and modular kitchen design. Friendly staff and excellent service.",
      rating: "★★★★★",
    },
  ];

  return (
    <section className="reviews">

      <div className="reviews-heading">

        <span>TESTIMONIALS</span>

        <h2>What Our Clients Say</h2>

        <p>
          Customer satisfaction is our biggest achievement.
        </p>

      </div>

      <div className="reviews-container">

        {reviews.map((item, index) => (

          <div className="review-card" key={index}>

            <div className="stars">{item.rating}</div>

            <p className="review-text">
              "{item.review}"
            </p>

            <div className="review-user">

              <div className="user-img">
                {item.name.charAt(0)}
              </div>

              <div>
                <h3>{item.name}</h3>
                <span>{item.city}</span>
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}