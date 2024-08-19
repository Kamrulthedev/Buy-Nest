import Discover from "@/components/Discover/Discover";
import ServiceAdvertisement from "../Services/ServiceAdvertisement";
import Brands from "./Brand/Brands";
import Testimonails from "./Testimonials/Testimonails";
import FeaturersProducts from "../Product/FeaturersProducts";
// import Hero from "./Hero/Hero";
import Bennar from "@/components/Bennar/Bennar";
import AccorditionSection from "@/components/AccorditionSection/AccorditionSection";

const Home = () => {
  return (
    <div>
      <Bennar />
      {/* <Hero /> */}

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
