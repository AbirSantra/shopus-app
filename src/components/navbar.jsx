import React, { useState } from "react";
import Logo from "../img/octopus.png";
import { FaChevronDown } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const categories = [
    { label: "Processor", link: "#" },
    { label: "Graphics Card", link: "#" },
    { label: "Motherboard", link: "#" },
    { label: "Memory", link: "#" },
    { label: "Storage", link: "#" },
    { label: "Power Supply", link: "#" },
  ];

  const [catMenu, setCatMenu] = useState(false);

  const toggleCatMenu = () => {
    setCatMenu((prevState) => !prevState);
  };

  return (
    <nav className="fluid-px flex h-20 w-full items-center justify-between gap-16">
      {/* Left Section */}
      <div className="flex items-center justify-center gap-8">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <div className="h-8 w-8">
            <img src={Logo} alt="ShopusLogo" />
          </div>
          <h1 className="text-2xl font-bold">Shopus</h1>
        </div>
        {/* Categories */}
        <div
          className="relative flex cursor-pointer items-center justify-center gap-2"
          onClick={toggleCatMenu}
        >
          <p className="font-semibold">Categories</p>
          <FaChevronDown size={12} />
          {/* DropDown Items */}
          {catMenu ? (
            <div className="absolute left-0 top-12 z-10 flex w-[200px] flex-col gap-2 rounded-md border border-neutral-200 bg-white p-4">
              {categories.map((cat) => (
                <div
                  key={cat.label}
                  className="hover:text-primary cursor-pointer rounded-md px-2 py-2 font-medium duration-300 ease-in-out hover:bg-orange-600 hover:text-white"
                >
                  <p>{cat.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full items-center justify-center gap-8">
        {/* SearchBar */}
        <div className="flex h-[40px]  w-full items-center justify-center gap-4 rounded-lg bg-neutral-100 px-4">
          <input
            className="w-full border-none bg-transparent text-sm outline-none"
            type="text"
            placeholder="Search products"
          />
          <button className="hover:text-primary cursor-pointer text-neutral-400 duration-200 ease-in-out hover:text-orange-600">
            <BiSearch size={20} />
          </button>
        </div>
        {/* Account */}
        <Link to={"/auth"} className="flex items-center justify-center gap-2">
          <FaRegUser className="text-orange-600" />
          <p className="text-sm font-semibold">Account</p>
        </Link>
        {/* Cart */}
        <div className="flex items-center justify-center gap-2">
          <MdOutlineShoppingCart className="text-orange-600" />
          <p className="text-sm font-semibold">Cart</p>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-600 p-2 text-sm font-medium text-white">
            4
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
