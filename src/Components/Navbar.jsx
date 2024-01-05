import React, { useState } from 'react';
import {
  Link,
} from "react-router-dom";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${props.mode === 'light' ? 'bg-gray-400 text-black' : 'bg-dark-primary text-white'} p-4`} >
      <div className="container mx-auto flex items-center justify-between">
        <div className={`${props.mode === 'light' ? ' text-black' : ' text-white'} font-bold text-xl`}>TextUtils</div>

        {/* Hamburger icon for mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleNavbar}
            className={`${props.mode === 'light' ? ' text-black' : ' text-white'} focus:outline-none`}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        {/* Navbar links */}
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
        {props.mode==='light' && <i
        className="fa-solid fa-moon fa-2xl inline-block mt-3  mr-4"
        style={{ color: '#1C083C', cursor: 'pointer' }}
        onClick={props.ToggleMode}
       ></i>}
       {props.mode==='dark' && <i
        className="fa-solid fa-sun fa-2xl inline-block mt-3  mr-4"
        style={{ color: '#f9d713', cursor: 'pointer' }}
        onClick={props.ToggleMode}
       ></i>}
          <Link to="/" className={` ${props.mode === 'light' ? ' text-black' : ' text-white hover:text-gray-300'} block lg:inline-block mt-4 lg:mt-0 mr-4 `}>
            Home  
          </Link>
          {/* <Link to="/about">About</Link> */}
          <Link to="/contact" className={` ${props.mode === 'light' ? ' text-black' : ' text-white hover:text-gray-300'} block lg:inline-block mt-4 lg:mt-0 mr-4 `}>
            Contact Us
          </Link>
          <Link to="/about" className={` ${props.mode === 'light' ? ' text-black' : ' text-white hover:text-gray-300'} block lg:inline-block mt-4 lg:mt-0 mr-4 `}>
            About  
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
