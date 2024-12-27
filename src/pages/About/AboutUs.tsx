import "animate.css";

const AboutUs = () => {
  return (
    <div className="p-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-violet-700">
          About Us
        </h1>

        <div className="flex flex-col md:flex-row items-center mb-8 animate__animated animate__fadeInDown">
          <img
            src="https://i.ibb.co.com/ySxTnqN/hq720.jpg"
            alt="Company Overview"
            className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6 transition-transform hover:scale-x-110"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4 lg:text-start text-center">Our Overview</h2>
            <p className="text-lg text-gray-700 lg:text-start text-center">
              Our company was founded in [Year] with a mission to provide
              high-quality fitness equipment to enthusiasts around the world.
              Over the years, we have grown into a trusted name in the fitness
              industry, known for our commitment to excellence and customer
              satisfaction.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center mb-8 animate__animated animate__fadeInDown">
          <img
            src="https://i.ibb.co.com/bNRKtPB/maxresdefault.jpg"
            alt="Our Mission"
            className="w-[500px] md:w-1/2 h-[400px] rounded-lg shadow-lg mb-6 md:mb-0 md:ml-6 transition-transform hover:scale-x-110"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4 lg:text-start text-center">Mission</h2>
            <p className="text-lg text-gray-700 lg:text-start text-center">
              Our mission is to inspire and empower individuals to lead
              healthier lives by providing top-of-the-line fitness equipment and
              exceptional service.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-8 animate__animated animate__fadeInDown">
          <img
            src="https://i.ibb.co.com/Pm8TSRp/louis-vuitton-designer-store-exchange-square-manchester-england-2-JAWGNT.jpg"
            alt="Our Vision"
            className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6 transition-transform hover:scale-x-110"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4 lg:text-start text-center">Vision</h2>
            <p className="text-lg text-gray-700 lg:text-start text-center">
              Our vision is to be the global leader in fitness equipment,
              recognized for our innovation, quality, and dedication to helping
              people achieve their fitness goals.
            </p>
          </div>
        </div>
        <div className="mb-8">
          {/* team member  */}
          <h2 className="text-2xl font-semibold mb-4 text-center animate__animated animate__fadeInDown">
            Meet Our Vendor
          </h2>
          {/* member 1 */}
          <div className="flex flex-wrap justify-center">
            <div className="max-w-xs mx-4 mb-8 animate__animated animate__fadeInDown">
              <img
                src="https://i.ibb.co.com/Bwz1gKQ/https-slimages-macysassets-com-is-image-MCY-products-0-optimized-26900170-fpx-tif-wid-1200-fmt-jpeg.webpg"
                alt="Team Member"
                className="w-full rounded-lg shadow-lg mb-2 h-96 object-cover transition-transform hover:scale-x-110"
              />
              <h3 className="text-xl font-semibold mb-2 lg:text-start text-center">John Doe</h3>
              <p className="text-gray-700 lg:text-start text-center font-serif">Johndoe Shop</p>
              <p className="text-gray-700 lg:text-start text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                condimentum tortor non urna porttitor, sit amet fringilla orci
                pulvinar.
              </p>
            </div>
            {/* member 2 */}
            <div className="max-w-xs mx-4 mb-8 animate__animated animate__fadeInDown">
              <img
                src="https://i.ibb.co.com/MBwMMr4/image.png"
               
                alt="Team Member"
                className="w-full rounded-lg shadow-lg mb-2 h-96 object-cover transition-transform hover:scale-x-110"
              />
              <h3 className="text-xl font-semibold mb-2 lg:text-start text-center">Hiade Oread</h3>
              <p className="text-gray-700 lg:text-start text-center font-serif">Hiadeoread Shop</p>
              <p className="text-gray-700 lg:text-start text-center">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </div>
            {/* member 3 */}
            <div className="max-w-xs mx-4 mb-8 animate__animated animate__fadeInDown">
              <img
               src="https://i.ibb.co.com/nPjhzN7/images.jpg"
                alt="Team Member"
                className="w-full rounded-lg shadow-lg mb-2 h-96 object-cover transition-transform hover:scale-x-110"
              />
              <h3 className="text-xl font-semibold mb-2 lg:text-start text-center">Jane Smith</h3>
              <p className="text-gray-700 lg:text-start text-center font-serif">Janesmith Shop</p>
              <p className="text-gray-700 lg:text-start text-center">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </div>
            {/* Add more team members as needed */}
          </div>

        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center animate__animated animate__fadeInDown">Our Customer Testimonials</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 flex items-center animate__animated animate__fadeInDown">
              <img
                src="https://i.ibb.co.com/nPjhzN7/images.jpg"
                alt="Customer"
                className="w-20 h-20 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                </p>
                <p className="text-gray-600">- John Doe</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 flex items-center animate__animated animate__fadeInDown">
              <img
                src="https://i.ibb.co.com/K73T480/image.png"
                alt="Customer"
                className="w-20 h-20 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                </p>
                <p className="text-gray-600">- Jane Smith</p>
              </div>
            </div>
            {/* Add more testimonials as needed */}
          </div>
        </div>

        <div className="text-center mt-8 animate__animated animate__fadeInDown">
          <h2 className="text-2xl font-semibold mb-4 ">Our Values</h2>
          <p className="text-lg text-gray-700 mb-4">
            Integrity, Quality, Innovation, and Customer Satisfaction are the
            core values that drive our business forward. We are committed to
            making a positive impact on the fitness industry and the lives of
            our customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
