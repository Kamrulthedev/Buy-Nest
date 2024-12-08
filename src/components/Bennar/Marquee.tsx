import ReactFastMarquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <div>
      <ReactFastMarquee>
        <div>
          <ul className="flex gap-10 text-5xl font-bold uppercase mt-20 items-center">
            <img src="https://i.ibb.co.com/QYN9VjH/img-press-03.webp" alt="" />
            <img src="https://i.ibb.co.com/zFBpn2z/img-press-01.webp" alt="" />
          </ul>
        </div>
      </ReactFastMarquee>
    </div>
  );
};

export default MarqueeComponent;
