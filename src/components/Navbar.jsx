import React from "react";
import { appleImg, searchImg, bagImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full flex justify-center px-5">
      <nav className="flex w-full justify-between screen-max-width py-5 items-center">
        <img src={appleImg} alt="logo" />
        <div className="flex items-center gap-10 text-gray text-sm sm:hidden">
          {navLists.map((navItem, i) => (
            <p
              className="text-gray text-sm hover:text-white transition-all cursor-pointer"
              key={i}
            >
              {navItem}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <img width={18} src={searchImg} alt="search" />
          <img width={18} src={bagImg} alt="search" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
