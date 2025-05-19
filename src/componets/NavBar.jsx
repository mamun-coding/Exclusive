import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="pt-[40px] pb-[16px] border border-b-gray-400">
      <div className="container">
        <div className="flex justify-between items-center gap-4">
          <div className="">
            <img src="Logo .svg" alt="" />
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/" className="text-[16px] leading-[24px] text-[#000000]">Home</Link>
            </li>
            <li>
              <Link to="Contact" className="text-[16px] leading-[24px] text-[#000000]">Contact</Link>
            </li>
            <li>
              <Link to="About" className="text-[16px] leading-[24px] text-[#000000]">About</Link>
            </li>
            <li>
              <Link to="Signup" className="text-[16px] leading-[24px] text-[#000000]">Signup</Link>
            </li>
          </ul>
          <div className="relative flex items-center bg-gray-300   rounded px-2 max-w-[243px]">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full py-2 pr-10 pl-3 bg-transparent outline-none text-black placeholder-gray-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <img src="serch.svg" alt="Send" className="w-5 h-5" />
              </button>
            </div>
          <div className="flex items-center gap-3">
            <button>
                <img src="Wishlist.svg" alt="" />
            </button>
            <button>
                <img src="cart.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
