import { Button } from "@/components/ui/button";
import "animate.css";

const ContactUs = () => {
  return (
    <div className="bg-primary-gradient min-h-screen text-white">
      <div className="container mx-auto py-20 px-5 text-center">
        <h1 className="text-5xl font-bold mb-5 animate__animated animate__fadeInDown">
          Contact Us
        </h1>
        <p className="text-xl mb-10 animate__animated animate__fadeInUp">
          We'd love to hear from you! Reach out to us with any questions or
          feedback.
        </p>
        <form className="max-w-lg mx-auto bg-white text-black p-10 rounded shadow-lg animate__animated animate__fadeIn">
          <div className="mb-5">
            <label className="block text-lg font-bold mb-2">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-5">
            <label className="block text-lg font-bold mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded border border-gray-300"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-5">
            <label className="block text-lg font-bold mb-2">Message</label>
            <textarea
              className="w-full p-3 rounded border border-gray-300"
              placeholder="Your Message"
              rows={5}
            ></textarea>
          </div>
          <Button
            type="submit"
            className="w-full p-3 bg-primary-gradient text-white rounded hover:bg-blue-700 transition-all duration-300"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
