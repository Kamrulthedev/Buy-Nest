import Discover from "@/components/Discover/Discover";
import ServiceAdvertisement from "../Services/ServiceAdvertisement";
import FeaturersProducts from "../Product/FeaturersProducts";
import AccorditionSection from "@/components/AccorditionSection/AccorditionSection";
import Hero from "@/components/Bennar/Hero";
import MarqueeComponent from "@/components/Bennar/Marquee";
import CategoryProducts from "@/components/CetegoryProducts/CetegoryProducts";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <MarqueeComponent></MarqueeComponent>
      <div className="w-11/12 mx-auto">
      <CategoryProducts></CategoryProducts>
        <ServiceAdvertisement />
        <FeaturersProducts />
        <Discover />
        <AccorditionSection />
      </div>
    </div>
  );
};

export default Home;
