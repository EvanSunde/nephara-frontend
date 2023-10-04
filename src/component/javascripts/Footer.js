import React from 'react';
import '../styles/Footer.css';
import { BiChevronRight } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsTiktok, BsYoutube } from 'react-icons/bs';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerFirstSection">
        <h2>NEPHARA</h2>
        <section className="footerBody">
          <section className="footerLinks">
            <ul>
              <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>
                <li>Home</li>
              </Link>
              <Link href="/products" style={{ textDecoration: 'none', color: 'white' }}>
                <li>Products</li>
              </Link>
              <Link href="/contact-us" style={{ textDecoration: 'none', color: 'white' }}>
                <li>Contact us</li>
              </Link>
              <Link href="/about" style={{ textDecoration: 'none', color: 'white' }}>
                <li>About Us</li>
              </Link>
              <Link href="/account" style={{ textDecoration: 'none', color: 'white' }}>
                <li>My Account</li>
              </Link>
            </ul>
          </section>
        </section>
        <section className="footerSocials">
          <p>Sign up for our email newsletter</p>
          <div className="footerSocialsInput">
            <input type="text" placeholder="Enter your email" />
            <button>
              <BiChevronRight />
            </button>
          </div>
          <div className="footerSocialsSocialLinks">
            <ul>
              <li>
                <BsFacebook />
              </li>
              <li>
                <BsInstagram />
              </li>
              <li>
                <BsYoutube />
              </li>
              <li>
                <BsTiktok />
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="footerSecondSection">
        <section className="footerBottom">
          <p>©2023 NEPHARA. All rights reserved.</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
