import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { MdHelp, MdFavorite } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left sight */}
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">
          Best <span className="font-bold">Food</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* left sight */}
      {/* Search input */}
      <div className="flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          type="text"
          placeholder="Search food"
          className="bg-transparent outline-none p-2 focus:outline-none flex-1"
        />
      </div>
      {/* Search input */}
      {/* Card */}
      <button className="bg-black text-white hidden md:flex items-center py-2 gap-2 rounded-full cursor-pointer">
        <BsFillCartFill size={20} />
        Cart
      </button>
      {/* Card */}
      {/* Mobile Menu */}
      {nav ? (
        <div className="bg-black/80 fixed z-10 w-full h-full top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-full bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-full bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(false)}
          size={20}
          className="absolute top-4 right-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Food</span>
        </h2>
        <nav>
          <ul className="flex flex-col text-gray-800 p-4">
            <li className="flex items-center py-4 text-xl">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="flex items-center py-4 text-xl">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="flex items-center py-4 text-xl">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="flex items-center py-4 text-xl">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="flex items-center py-4 text-xl">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="flex items-center py-4 text-xl">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="flex items-center py-4 text-xl">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
    </nav>
  );
};

export default Navbar;
