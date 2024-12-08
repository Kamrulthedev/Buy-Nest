import Discover from "@/components/Discover/Discover";
import ServiceAdvertisement from "../Services/ServiceAdvertisement";
import Brands from "./Brand/Brands";
import Testimonails from "./Testimonials/Testimonails";
import FeaturersProducts from "../Product/FeaturersProducts";
import AccorditionSection from "@/components/AccorditionSection/AccorditionSection";
import Hero from "@/components/Bennar/Hero";
import MarqueeComponent from "@/components/Bennar/Marquee";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <MarqueeComponent></MarqueeComponent>
      <div className="w-11/12 mx-auto">
        <Brands />
        <ServiceAdvertisement />
        <FeaturersProducts />
        <Discover />
        <Testimonails />
        <AccorditionSection />
      </div>
    </div>
  );
};

export default Home;
