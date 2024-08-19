import Heading from "@/Heading/Heading";
import { Button } from "../ui/button";
import "../Navber/navber.css";

const Discover = () => {
  return (
    <div className="mb-20 mt-20">
      <Heading Heading="Discover Our Signature Mechanical Keyboard Products"></Heading>
      <div>
        <h1>
          At KeebsForAll, we are passionate about crafting exceptional products
          beyond our Freebird Mechanical Keyboards. We dedicate our time to
          design and create unique items exclusively available in our store,
          catering to a diverse range of preferences. Explore our extensive
          collection of KFA branded products, and you might just find something
          that resonates with you. Rest assured, all our KFA products adhere to
          our stringent quality standards, using premium materials that
          guarantee unmatched durability.
        </h1>
      </div>
      <div className="md:flex mt-20">
        <div className="bg-[#d9d9d9] md:w-1/2  flex items-center p-16  ">
          <div className="space-y-4">
            <Heading Heading="faPBT Keycaps"></Heading>
            <p>
              If you're looking for a unique and exclusive keycap set to style
              your keyboard to your own preferences, we encourage you to explore
              our collection of custom, one-of-a-kind keycaps.
            </p>
            <Button className="bg-primary-gradient">Explore</Button>
          </div>
        </div>
        <div className="md:w-1/2 image-container">
          <img
            src="https://keebsforall.com/cdn/shop/products/DSC09732.jpg?v=1676148273&width=700"
            alt=""
            className="w-full"
          />
        </div>
      </div>
      <div className="md:flex ">
        <div className="md:w-1/2 image-container">
          <img
            src="https://keebsforall.com/cdn/shop/products/pink-robin-switch-on-wood-closeup.png"
            alt=""
          />
        </div>
        <div className="bg-[#d9d9d9] md:w-1/2  flex items-center p-16  ">
          <div className="space-y-4">
            <Heading Heading=" KFA Switches"></Heading>
            <p>
              Sometimes, you just want to switch things up. KFA Switches are not
              just about exceptional performance; they're all about making your
              keyboard sound absolutely awesome!"
            </p>
            <Button className="bg-primary-gradient">Explore</Button>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="bg-[#d9d9d9] md:w-1/2  flex items-center p-16  ">
          <div className="space-y-4">
            <Heading Heading="KFA Deskmats"></Heading>
            <p>
              If you're looking for a unique and exclusive keycap set to style
              your keyboard to your own preferences, we encourage you to explore
              our collection of custom, one-of-a-kind keycaps.
            </p>
            <Button className="bg-primary-gradient">Explore</Button>
          </div>
        </div>
        <div className="md:w-1/2 image-container">
          <img
            src="https://keebsforall.com/cdn/shop/products/Cat-Mat-Right-Side.png"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
