import Line from "@/components/CetegoryProducts/Line";
import { Button } from "@/components/ui/button";
import "animate.css";
import { FaCommentDots, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-700 p-4">
      <div className="container mx-auto py-20 px-5 text-center animate__animated animate__fadeInDown">
        <h1 className="text-4xl font-bold mb-5">
          Contact Us
        </h1>
        <p className="text-xl mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero <br /> vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi,<br />vulputate adipiscing cursus eu,suscipit id nulla.
        </p>
        <form className="max-w-4xl mx-auto bg-white text-black p-10 rounded shadow-lg animate__animated animate__fadeIn">
          <div className="lg:flex gap-6">
            <div className="mb-5 lg:w-[224px]">
              <label className="block text-lg font-bold mb-2  text-start">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded border border-gray-300 bg-slate-50 "
                placeholder="Your Name"
              />
            </div>
            <div className="mb-5 lg:w-[224px]">
              <label className="block text-lg font-bold mb-2  text-start">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded border border-gray-300 bg-slate-50"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-5 lg:w-[224px]">
              <label className="block text-lg font-bold mb-2 text-start">Phone</label>
              <input
                type="Phone"
                className="w-full p-3 rounded border border-gray-300 bg-slate-50"
                placeholder="Your Phone"
              />
            </div>
          </div>
          <div className="mb-5">
            <label className="block text-lg font-bold mb-2 text-start">Message</label>
            <textarea
              className="w-full p-3 rounded border border-gray-300 bg-gray-50"
              placeholder="Your Message"
              rows={5}
            ></textarea>
          </div>
          <Button
            type="submit"
            className="w-full p-3 bg-primary-gradient text-white rounded  transition-all duration-300"
          >
            Send Message
          </Button>
        </form>
      </div>

      <Line></Line>

      <div className="text-black py-16 ">
        {/* Header Section */}
        <div className="text-center mb-8 animate__animated animate__fadeInDown">
          <h1 className="text-4xl  font-semibold">Get in touch</h1>
          <p className="text-lg mt-2">Want to get in touch? We&apos;d love to hear from you. Here&apos;s how you can reach us.</p>
        </div>

        {/* Contact Options Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mx-auto max-w-4xl animate__animated animate__fadeInDown">
          {/* Sales Contact */}
          <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 w-full md:w-1/2">
            <div className="flex justify-center mb-4">
              <FaPhoneAlt className="text-3xl text-gray-900" />
            </div>
            <h2 className="text-center text-2xl font-semibold mb-4">Talk to Sales</h2>
            <p className="text-center mb-6">
              Interested in our products? Just pick up the phone to chat with a member of our sales team.
            </p>
            <p className="text-center text-violet-500 font-semibold text-lg mb-2">+1 857 829 5060</p>
            <p className="text-center text-violet-500 underline cursor-pointer">View all global numbers</p>
          </div>

          {/* Customer Support */}
          <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 w-full md:w-1/2">
            <div className="flex justify-center mb-4">
              <FaCommentDots className="text-3xl text-gray-900" />
            </div>
            <h2 className="text-center text-2xl font-semibold mb-4">Contact Customer Support</h2>
            <p className="text-center mb-6">
              Sometimes you need a little help from your friends. Or a support rep. Don’t worry… we’re here for you.
            </p>
            <div className="flex justify-center">
              <button className="bg-violet-300 hover:bg-violet-400 text-gray-600 hover:text-white font-semibold py-2 px-4 rounded">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
      <Line></Line>
    </div>
  );
};

export default ContactUs;
