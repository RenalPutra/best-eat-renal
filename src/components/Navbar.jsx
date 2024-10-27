import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { useActionData } from "react-router-dom";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  return (
    <div className="max-w-[1640px] flex justify-between items-center p-4 mx-auto">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setnav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Beast<span className="font-bold"> Eats</span>
        </h1>
        <div className="hidden bg-gray-200 text-[14px] lg:flex items-center rounded-full p-1">
          <p className="text-white p-2 bg-black rounded-full">Delivery</p>
          <p className="p-1">Pickup</p>
        </div>
      </div>

      {/* search input */}
      <div className="flex items-center bg-gray-200 px-2 rounded-full w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="search food"
          className="bg-transparent p-2 w-full focus:outline-none"
        />
      </div>
      {/* cart button */}
      <button className="bg-black text-white md:flex hidden items-center  rounded-full ">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>
      {/* mobile nav */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 inset-0"></div>
      ) : (
        ""
      )}

      {/* side drawer menu */}
      <div
        className={
          nav
            ? "fixed bg-white w-[300px] z-10 h-screen top-0 left-0 duration-300"
            : "fixed bg-white w-[300px] z-10 h-screen top-0 left-[-100%] duration-300"
        }
      >
        <AiOutlineClose
        onClick={() => setnav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Beast <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="p-4 flex flex-col text-gray-800">
            <li className="py-4 text-xl flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="py-4 text-xl flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="py-4 text-xl flex">
              <FaWallet size={25} className="mr-4" /> wallet
            </li>
            <li className="py-4 text-xl flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="py-4 text-xl flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="py-4 text-xl flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best One
            </li>
            <li className="py-4 text-xl flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
