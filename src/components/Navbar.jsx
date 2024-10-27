import Button from "./Button";
import React, { useState } from "react";

export default function Navbar() {
  // State untuk mengontrol tampilan modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Fungsi untuk toggle modal
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div>
      <nav className="fixed w-full flex justify-between items-center md:px-20 px-2 z-50 bg-[#353543]">
        {/* Logo */}
        <div className="font-extrabold text-white flex justify-between items-center md:w-[45%]">
          <div>
            <h1 className="md:text-2xl text-lg">😊 WillyCandra</h1>
          </div>
        </div>

        {/* menu */}
        <div className="p-4 w-96 hidden md:flex justify-between text-white">
          <a href="/#hero" className="px-3 py-2 hover-text">
            Home
          </a>
          <a href="/#about" className="px-3 py-2 hover-text">
            About
          </a>
          <a href="/#portofolio" className="px-3 py-2 hover-text">
            Portofolio
          </a>
          <a href="/#contact" className="px-3 py-2 hover-text">
            Contact
          </a>
        </div>

        {/* Menu Bar */}
        <div className="block md:hidden p-3 text-white">
          <button className="text-lg" onClick={toggleModal}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* modal */}
      {isModalVisible && (
        <div className="fixed top-[3.3rem] left-0 bg-[#353543] w-full flex flex-col px-3 border-2 border-white pt-2 pb-2 text-white transition-all duration-300 z-50">
          <a
            href="#"
            className="py-2 hover:px-1 hover:bg-[#2D2D39] hover:rounded-lg hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="py-2 hover:px-1 hover:bg-[#2D2D39] hover:rounded-lg hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="py-2 hover:px-1 hover:bg-[#2D2D39] hover:rounded-lg hover:text-white"
          >
            Portofolio
          </a>
          <a
            href="#"
            className="py-2 hover:px-1 hover:bg-[#2D2D39] hover:rounded-lg hover:text-white mb-2"
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}
