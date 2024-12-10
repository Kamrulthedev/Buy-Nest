import ServiceAdvertisement from "../Services/ServiceAdvertisement";
import Hero from "@/components/Bennar/Hero";
import MarqueeComponent from "@/components/Bennar/Marquee";
import CategoryProducts from "@/components/CetegoryProducts/CetegoryProducts";
import Line from "@/components/CetegoryProducts/Line";
import Cetegory from "@/components/CetegoryProducts/Cetegory";
import RecentProducts from "@/components/RecentProducts/RecentProducts";
import OurVendor from "@/components/OurVendor/OurVendor";
import SignupBanner from "@/components/Bennar/SignupBanner";

const Home = () => {
  return (
    <div className="font-serif">
      <Hero></Hero>
      <MarqueeComponent></MarqueeComponent>
      <div className="w-11/12 mx-auto">
        <CategoryProducts></CategoryProducts>
        <Line></Line>
        <Cetegory></Cetegory>
        <RecentProducts></RecentProducts>
        <Line></Line>
        <OurVendor></OurVendor>
        <ServiceAdvertisement />
        <SignupBanner></SignupBanner>
      </div>
    </div>
  );
};

export default Home;
