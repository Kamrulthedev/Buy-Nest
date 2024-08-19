import "animate.css";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-primary-gradient flex items-center justify-center p-10">
      <div className="max-w-3xl text-white text-center space-y-6">
        <h1 className="text-4xl font-bold  animate__animated animate__fadeInDown">
          About Us
        </h1>
        <p className="text-xl leading-relaxed animate__animated animate__fadeInUp">
          Welcome to our company! We are dedicated to providing the best
          services to our customers. Our team of experts are always ready to
          help you with your needs. We value creativity, innovation, and
          excellence. Join us on our journey to make the world a better place
          with our innovative solutions and exceptional services.
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-lg">
            Our mission is to deliver high-quality products and services that
            bring value to our customers and enhance their lives.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p className="text-lg">
            Our vision is to be a global leader in our industry, setting
            standards for excellence and integrity.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Values</h2>
          <p className="text-lg">
            We value integrity, innovation, and customer satisfaction. We
            believe in continuous improvement and strive to exceed expectations
            in everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
