"use client";

import { useState } from "react";
import Image from "next/image";
import logoNav from "../images/logonav.png";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="sm:py-10 py-6 px-6 md:px-2 flex justify-between md:justify-evenly items-center font-poppins">
        <div className="logo">
          <Image src={logoNav} alt="Logo" className="md:w-[30vmin] w-[40vmin] h-auto" />
        </div>
        <ul className="hidden md:flex text-black gap-7">
        <li><Link className="text-[1em] text-black tracking-wide" href="/">Home</Link></li>
        <li><Link className="text-[1em] text-black tracking-wide" href="/services">Services</Link></li>
          <li><Link className="text-[1em] text-black tracking-wide" href="/about">About</Link></li>
          <li><Link className="text-[1em] text-black tracking-wide" href="/contact">Contact</Link></li>
        </ul>
        <div
          className="block md:hidden font-semibold text-[1.2em] cursor-pointer"
          onClick={toggleHandler}
        >
          ☰
        </div>

        <div
          className={`${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-100%]"
          } bg-peach w-full h-[250px] fixed top-0 left-0 right-0 z-[9999] py-10 px-6 transition-all duration-500 ease-in-out`}
        >
          <div className="absolute top-6 right-6 font-semibold cursor-pointer" onClick={toggleHandler}>
            X
          </div>
          <ul className="flex flex-col text-black gap-7">
          <li><Link className="text-[1em] text-black tracking-wide" onClick={toggleHandler} href="/">Home</Link></li>
            <li><Link className="text-[1em] text-black tracking-wide" onClick={toggleHandler} href="/services">Services</Link></li>
            <li><Link className="text-[1em] text-black tracking-wide" onClick={toggleHandler} href="/about">About</Link></li>
            <li><Link className="text-[1em] text-black tracking-wide" onClick={toggleHandler} href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
  