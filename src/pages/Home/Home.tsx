import ServiceAdvertisement from "../Services/ServiceAdvertisement";
import AccorditionSection from "@/components/AccorditionSection/AccorditionSection";
import Hero from "@/components/Bennar/Hero";
import MarqueeComponent from "@/components/Bennar/Marquee";
import CategoryProducts from "@/components/CetegoryProducts/CetegoryProducts";
import Line from "@/components/CetegoryProducts/Line";
import Cetegory from "@/components/CetegoryProducts/Cetegory";
import RecentProducts from "@/components/RecentProducts/RecentProducts";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <MarqueeComponent></MarqueeComponent>
      <div className="w-11/12 mx-auto">
        <CategoryProducts></CategoryProducts>
        <Line></Line>
        <Cetegory></Cetegory>
        <RecentProducts></RecentProducts>
        <Line></Line>
        <ServiceAdvertisement />
        
        <AccorditionSection />
      </div>
    </div>
  );
};

export default Home;
