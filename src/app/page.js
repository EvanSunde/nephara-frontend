import HeroSection from "./home/javascripts/HeroSection";
import OurProducts from "./home/javascripts/OurProducts";
import OurServices from "./home/javascripts/OurServices";
import Feedback from "./home/javascripts/Feedback";
import Footer from "@/component/javascripts/Footer";
import Navbar from "@/component/javascripts/Navbar";


export default function Home() {
  return (
    <>
      <div style={{ overflowX: 'hidden' }}>
        <Navbar />
        <HeroSection />
        <OurProducts />
        <OurServices />
        <Feedback />
        <Footer />
      </div>
    </>
  )
};
