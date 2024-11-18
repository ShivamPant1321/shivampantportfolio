import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="z-50 flex flex-shrink-0 items-center">
        <img className="lg:mx-20 w-12" src={logo} alt="logo" />
      </div>
      <div className="lg:mx-20 z-50 m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://linkedin.com/in/shivam-pant-966a10251" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ShivamPant1321" target="_blank">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/user2738RS/ " target="_blank">
          <SiLeetcode />
        </a>
        <a
          href="https://www.geeksforgeeks.org/user/pantshivo1qh/  "
          target="_blank"
        >
          <SiGeeksforgeeks />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
