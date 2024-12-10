import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { LuInstagram } from 'react-icons/lu';

const Footer = () => {
  const [currentDateTime] = useState(new Date());
  const year = currentDateTime.getFullYear();

  return (
    <footer className="bg-slate-50 text-black px-4 lg:px-8 py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* Company Links */}
          <div className=''>
            <h6 className="text-black font-serif mb-4 text-xl animate__animated animate__lightSpeedInRight">COMPANY LINKS</h6>
            <ul className="text-lg space-y-1 font-serif animate__animated animate__lightSpeedInRight">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h6 className="text-black font-serif mb-4 text-xl animate__animated animate__lightSpeedInRight">CUSTOMER SERVICE</h6>
            <ul className="text-lg space-y-1 font-serif animate__animated animate__lightSpeedInRight">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Returns & Cancellations</a></li>
              <li><a href="#">Shipping Information</a></li>
              <li><a href="#">Order Tracking</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-black font-serif mb-4 text-xl animate__animated animate__lightSpeedInRight">QUICK LINKS</h6>
            <ul className="text-lg space-y-1 font-serif animate__animated animate__lightSpeedInRight">
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop Now</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Sales & Offers</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h6 className="text-black font-serif mb-4 text-xl animate__animated animate__lightSpeedInRight">CONNECT WITH US</h6>
            <ul className="text-lg space-y-1 font-serif animate__animated animate__lightSpeedInRight">
              <li>Phone: 800-527-6063 (Sales)</li>
              <li>Email: support@buynest.com</li>
            </ul>
            <div className="mt-6 lg:flex gap-4 text-2xl animate__animated animate__lightSpeedInRight">
              <div className='flex'>
                <a href="#" className="text-sky-500 p-3 hover:bg-slate-200 rounded"><FaFacebookF /></a>
                <a href="#" className="text-orange-400 p-3 hover:bg-slate-200 rounded"><LuInstagram /></a>
                <a href="#" className="text-sky-500 p-3 hover:bg-slate-200 rounded"><FaTwitter /></a>
              </div>
              <div className='flex'>
                <a href="#" className="text-red-500 p-3 hover:bg-slate-200 rounded"><FaYoutube /></a>
                <a href="#" className="text-sky-600 p-3 hover:bg-slate-200 rounded"><FaLinkedin /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xl font-serif animate__animated animate__lightSpeedInRight">
          <p>© {year} - Buy Nest. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
