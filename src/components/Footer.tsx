import React from "react";
import { Footers } from "../constants";
import { FooterLinkProps, FooterProps } from "../types/models";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex max-md:flex-col my-20">
      <div className="flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center justify-around max-md:w-full w-2/3 md:mx-10">
        {Footers.map((items: FooterProps) => (
          <div className=" flex flex-col md:justify-start md:items-start font-semibold max-md:text-center mb-2">
            <span className="text-lg text-[#4EE567] mb-2 font-layarBahteraBold">{items.title}</span>
            <div>
              {items.links.map((link: FooterLinkProps) => (
                <div className="text-base text-black mb-1 hover:text-[#4EE567] font-layarBahteralight">
                  <Link to={link.url}>{link.title}</Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col  max-md:my-4 items-center justify-center md:mr-4">
        <img src="./play.png" alt="play-app" width={100} height={40} />
        <img src="./app.png" alt="play-app" width={100} height={40} />
      </div>
      <div className="flex md:justify-between justify-center items-center gap-2 md:gap-6 md:ml-8 max-md:mt-4 ">
        <FaTwitter size={40} className="hover:text-[#4EE567] cursor-pointer" />
        <FaInstagram
          size={40}
          className="hover:text-[#4EE567] cursor-pointer"
        />
        <FaFacebookF
          size={40}
          className="hover:text-[#4EE567] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
