import React, { useState } from "react";
import styles from "./Navbar.module.css"; // Import the CSS file
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white h-16 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-2 py-4 flex flex-row items-center justify-between w-full md:w-3/4">
        <Link href="/" className="flex">
          <Image
            src="/GoBooks.png"
            alt="Go Books Logo"
            width={100}
            height={10}
          />
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <p className="text-gray-600 hover:text-gray-800">Home</p>
          </Link>
          <Link href="/about">
            <p className="text-gray-600 hover:text-gray-800">About</p>
          </Link>
          {/* <Link href="/courses">
            <p className="text-gray-600 hover:text-gray-800">Courses</p>
          </Link> */}
          <Link href="/contact">
            <p className="text-gray-600 hover:text-gray-800">Contact</p>
          </Link>
        </div>

        <button
          className="text-gray-600 hover:text-gray-800 md:hidden"
          onClick={toggleMenu}
          aria-label="Open Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {isMenuOpen && (
          <div
            className={`${styles.dropdownContainer} ${
              isMenuOpen ? styles.dropdownOpen : ""
            }`}
          >
            <div className=" md:flex space-x-4">
              <Link href="/">
                <p className="text-gray-600 hover:text-gray-800">Home</p>
              </Link>
              <Link href="/about">
                <p className="text-gray-600 hover:text-gray-800">About</p>
              </Link>
              {/* <Link href="/courses">
                <p className="text-gray-600 hover:text-gray-800">Courses</p>
              </Link> */}
              <Link href="/contact">
                <p className="text-gray-600 hover:text-gray-800">Contact</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
