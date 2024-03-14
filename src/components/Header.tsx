import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { GrMenu, GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [toggleOpenMenu, setToggleOpenMenu] = useState(true);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    setToggleOpenMenu(!toggleOpenMenu);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
    setToggleOpenMenu(true);
  };

  return (
    <div className="fixed top-0 w-full mx-auto h-20 px-4 font-layarBahtera z-10">
      <div className="flex justify-between items-center bg-[#fff] text-lg">
        <Link to="">
          <img src="./upaychat.png" alt="" />
        </Link>
        <div className="hidden md:flex">
          <ul className="flex justify-center items-center gap-4">
            <li className="flex items-center gap-1 hover:text-[#4EE567] cursor-pointer">
              Send & Receive{" "}
              <span>
                <FaCaretDown />
              </span>
            </li>
            <li className="flex items-center hover:text-[#4EE567] cursor-pointer">
              Buy Airtime & Data{" "}
              <span>
                <FaCaretDown />
              </span>
            </li>
            <li className="flex items-center hover:text-[#4EE567] cursor-pointer">
              Pay Bills{" "}
              <span>
                <FaCaretDown />
              </span>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <div className="flex justify-center items-center gap-4">
            <Link to="/login" className="hover:text-[#4EE567]">
              Login
            </Link>
            <Link to="/register" className="hover:text-[#4EE567]">
              Register
            </Link>
          </div>
        </div>
        <div className="flex md:hidden cursor-pointer mr-4">
          {toggleOpenMenu && <GrMenu size={30} onClick={handleOpenMenu} />}
        </div>

        {openMenu && (
          <div>
            <div className="bg-[#000000bb]  w-full h-[100%] fixed top-0 left-0 z-30" onClick={handleCloseMenu}></div>
            <div className="h-[100%] w-[50%] fixed right-0 top-0 shadow z-50 bg-[#fff]">
              <GrClose
                size={30}
                className="z-30 absolute top-5 right-6 cursor-pointer"
                onClick={handleCloseMenu}
              />
              <div className="flex flex-col justify-start items-start gap-2 mt-24 mx-6 text-base">
                <Link
                  to="/login"
                  className="hover:text-[#4EE567] border-b border-black w-full leading-10"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="hover:text-[#4EE567] border-b border-black w-full leading-10"
                >
                  Register
                </Link>
                <ul className="flex flex-col justify-start items-start gap-2 w-full">
                  <li className="flex items-center justify-between gap-1 hover:text-[#4EE567] cursor-pointer border-b border-black w-full leading-10">
                    Send & Receive{" "}
                    <span>
                      <FaCaretDown />
                    </span>
                  </li>
                  <li className="flex items-center justify-between hover:text-[#4EE567] cursor-pointer border-b border-black w-full leading-10">
                    Buy Airtime & Data{" "}
                    <span>
                      <FaCaretDown />
                    </span>
                  </li>
                  <li className="flex items-center justify-between hover:text-[#4EE567] cursor-pointer">
                    Pay Bills{" "}
                    <span> 
                      <FaCaretDown />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
