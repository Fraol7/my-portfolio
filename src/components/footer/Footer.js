import React from "react";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-scroll";
// import { navLinksdata } from "../../constants";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black flex flex-col md:flex-row justify-between gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <div className="">
          <video
            src={logo}
            alt="logo"
            className="cursor-pointer"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://www.instagram.com/fraolala/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://x.com/fraol_27" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/fraol7/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://leetcode.com/Fraol27/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode />
            </a>
          </span>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex gap-16 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                About
                <div className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Services
                <div className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Portfolio
                <div className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="testimonial"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Testimonial
                <div className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Contact
                <div className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
