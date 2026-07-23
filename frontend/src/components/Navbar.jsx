import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <h2>LAXMI GLASS HOUSE</h2>
      </div>

      {/* Hamburger */}

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>

        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>

        <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>

        <li><Link to="/brands" onClick={() => setMenuOpen(false)}>Brands</Link></li>

        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

      </ul>

      <div className="nav-right">
        <button className="call-btn">
          📞 Call Now
        </button>
      </div>

    </nav>
  );
}