import ReactFastMarquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <div className="pt-16 text-center font-serif bg-white">
      <div className="pt-12">
        <h1 className="text-2xl text-gray-800 animate__animated animate__flash">
          Join <span className="text-rose-400 animate__animated animate__flash">10,000+</span> successful brands choosing Minimog to build & grow their Shopify stores!
        </h1>
      </div>
      <ReactFastMarquee>
        <div>
          <ul className="flex gap-16 items-center">
            <li>
              <img
                src="https://i.ibb.co.com/Mh2FRdP/image.png"
                alt=""
                className="w-44 h-44  object-cover hover:scale-110 transition-transform"
              />
            </li>
            <li>
              <img
                src="https://i.ibb.co.com/CV0nTWh/image.png"
                alt=""
                className="w-44 h-44 object-cover hover:scale-110 transition-transform"
              />
            </li>
            <li>
              <img
                src="https://i.ibb.co.com/HqQx06P/image.png"
                alt=""
                className="w-44 h-44 object-cover hover:scale-110 transition-transform"
              />
            </li>
            <li>
              <img
                src="https://i.ibb.co.com/Gxdp0RC/image.png"
                alt=""
                className="w-44 h-44 object-cover hover:scale-110 transition-transform"
              />
            </li>
            <li>
              <img
                src="https://i.ibb.co.com/XJTxf21/image.png"
                alt=""
                className="w-44 h-44 object-cover hover:scale-110 transition-transform"
              />
            </li>

            <li>
              <img
                src="https://i.ibb.co.com/K7234qv/image.png"
                alt=""
                className="w-44 h-44 object-cover hover:scale-110 transition-transform"
              />
            </li>

          </ul>
        </div>
      </ReactFastMarquee>
    </div>

  );
};

export default MarqueeComponent;
