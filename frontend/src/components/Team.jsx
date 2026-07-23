export default function Team() {
  const team = [
    {
      name: "Surender Thakur",
      role: "Owner",
      image: "/Team/ower.jpeg",
      about:
        "20+ years of experience in premium glass, plywood and interior solutions.",
    },
    {
      name: "Ayush Thakur",
      role: "Manager",
      image: "/Team/manager.jpeg",
      about:
        "Manages projects efficiently and ensures timely completion with quality.",
    },
    {
      name: "Sehazad",
      role: "Carpenter",
      image: "/Team/Carpainter.jpeg",
      about:
        "Expert in modular kitchens, wardrobes and customized wooden furniture.",
    },
    {
      name: "Nawab Ali",
      role: "glass Worker",
      image: "/Team/glass worker.jpeg",
      about:
        "Specialist in glass fitting, partitions, mirrors and decorative glass work.",
    },
  ];

  return (
    <section className="team">

      <div className="team-heading">

        <span>OUR PROFESSIONAL TEAM</span>

        <h2>Meet Our Experts</h2>

        <p>
          Skilled professionals delivering premium interior and glass solutions.
        </p>

      </div>

      <div className="team-container">

        {team.map((member, index) => (
          <div className="team-card" key={index}>

            <img src={member.image} alt={member.name} />

            <div className="team-content">

              <h3>{member.name}</h3>

              <h4>{member.role}</h4>

              <p>{member.about}</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}