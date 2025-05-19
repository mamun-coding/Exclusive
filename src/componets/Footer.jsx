import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#030406]">
      <div className="container">
        <div className="grid grid-cols-5 pt-[80px] pb-[140px]">
          <div>
            <div>
              <img src="Logo 2.svg" alt="" />
            </div>
            <p className="text-white text-[20px] leading-[28px] font-medium pb-[28px]">
              Subscribe
            </p>
            <p className="text-white text-[16px] leading-[24px] pb-4">
              Get 10% off your first order
            </p>
            <div className="relative flex items-center  border border-white rounded px-2 max-w-[217px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full py-2 pr-10 pl-3 bg-transparent outline-none text-black placeholder-gray-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <img src="send.svg" alt="Send" className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-white text-[20px] leading-[28px] font-medium pb-[28px]">
              Support
            </h4>
            <p className="text-white">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-white">exclusive@gmail.com</p>
            <p className="text-white">+88015-88888-9999</p>
          </div>
          <div>
            <h4 className="text-white text-[20px] leading-[28px] font-medium pb-[28px]">
              Account
            </h4>
            <ul>
              <Meneu name="My Account" />
              <Meneu name="Login / Register" />
              <Meneu name=" Cart" />
              <Meneu name=" Wishlist" />
              <Meneu name=" Shop" />
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[20px] leading-[28px] font-medium pb-[28px]">
              Quick Link
            </h4>
            <ul>
              <Meneu name="Privacy Policy" />
              <Meneu name=" Terms Of Use" />
              <Meneu name="FAQ" />
              <Meneu name="Contact" />
            </ul>
          </div>
          <div className="bg-black text-white  flex flex-col items-center space-y-6">
            <div className="text-center">
              <h2 className="text-white text-2xl font-semibold mb-2">
                Download App
              </h2>
              <p className="text-gray-300 mb-4">
                Save $3 with App New User Only
              </p>
              <div className="flex justify-center gap-4 mb-4">
                <img src="/Qr Code.svg" alt="QR Code" className="w-24 h-24" />
                <div className="flex flex-col gap-2 justify-center">
                  <img
                    src="/GooglePlay.jpg"
                    alt="Google Play"
                    className="h-10"
                  />
                  <img src="/AppStore.jpg" alt="App Store" className="h-10" />
                </div>
              </div>
            </div>
            <div className="flex space-x-6 text-xl">
              <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
              <FaTwitter className="hover:text-gray-400 cursor-pointer" />
              <FaInstagram className="hover:text-gray-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
function Meneu({ name }) {
  return (
    <>
      <li>
        <Link className="text-white text-[16px] leading-[24px] pb-4">
          {name}
        </Link>
      </li>
    </>
  );
}

export default Footer;
