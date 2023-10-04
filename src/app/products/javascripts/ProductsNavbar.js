'use client'
import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import '../styles/ProductsNavbar.css';
import { BiArrowBack } from 'react-icons/bi';

const ProductsNavbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown content

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Function to close the dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };
  // Function to handle the back button click
  const handleBackButtonClick = () => {
    window.history.back();
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className='productsNavbar'>
      <button onClick={handleBackButtonClick}>
      <BiArrowBack />
        </button>
        <h1>NEPHARA</h1>
        <div className='productsNavbarButtons'>
          <div className='productsNavbarUserAvatar'>
            <button onClick={toggleDropdown}>
              <FaUser />
            </button>
            {dropdownVisible && (
              <div className='productsNavbarDropdownContent' ref={dropdownRef}>
                <ul>
                  <li>Profile</li>
                  <li>Log Out</li>
                </ul>
              </div>
            )}
          </div>

          <button>
            <AiOutlineShoppingCart />
          </button>
        </div>
      </nav>
    </>
  );
};

export default ProductsNavbar;
