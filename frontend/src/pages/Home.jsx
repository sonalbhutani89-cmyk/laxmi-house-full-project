import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
     < WhyChooseUs />
     <Gallery />
     <Contact />
     <Team />
     <Reviews />
     <Footer />

    </>
  );
}