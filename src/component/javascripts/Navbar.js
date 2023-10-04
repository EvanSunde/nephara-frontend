'use client'
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { HiBars4 } from "react-icons/hi2";
import '../styles/Navbar.css';
import Link from 'next/link';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [hideNavbar, setHideNavbar] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const navRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY) {
                setHideNavbar(true);
                setIsSidebarOpen(false);
            } else {
                setHideNavbar(false);
            }

            setPrevScrollY(currentScrollY);
        };

        const mediaQuery = window.matchMedia("(max-width: 575px)");

        const handleDocumentClick = (event) => {
            if (isSidebarOpen && mediaQuery.matches && !navRef.current.contains(event.target)) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleDocumentClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [prevScrollY]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <header className={`navbar ${hideNavbar ? 'hidden' : ''}`}>
                <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <h1>NEPHARA</h1>
                </Link>
                <nav className='navbarLinks'>
                    <ul>
                        <Link href="/products" style={{ textDecoration: 'none', color: 'white' }}>
                            <li>PRODUCTS</li>
                        </Link>
                        <Link href="/about" style={{ textDecoration: 'none', color: 'white' }}>
                            <li>ABOUT US</li>
                        </Link>
                        <Link href="/account" style={{ textDecoration: 'none', color: 'white' }}>
                            <li>MY ACCOUNT</li>
                        </Link>
                        <Link href="/contact-us" style={{ textDecoration: 'none', color: 'white' }}>
                            <li>CONTACT US</li>
                        </Link>
                    </ul>
                </nav>
                <div className='navbarRightSection'>
                    <i className='navbarCart'>
                        <Link href='/cart' style={{color:'white'}}>
                            <AiOutlineShoppingCart />
                        </Link></i>
                    {
                        isSidebarOpen ?
                            <i className='navbarSidebarCross' onClick={toggleSidebar}>
                                <RxCross1 />
                            </i> :
                            <i className='navbarSidebarButton' onClick={toggleSidebar}>
                                <HiBars4 />
                            </i>
                    }
                </div>
            </header>
            {isSidebarOpen && (
                <div className='navbarSidebarNavigation' ref={navRef}>
                    <ul>
                        <Link href="/products" style={{ textDecoration: 'none', color: 'white' }}>
                            <li>PRODUCTS</li>
                        </Link>
                        <Link href="/about" style={{ textDecoration: 'none', color: 'white' }}>
                            <li>ABOUT US</li>
                        </Link>
                        <Link href="/account" style={{ textDecoration: 'none', color: 'white' }}>
                            <li>MY ACCOUNT</li>
                        </Link>
                        <Link href="/contact-us" style={{ textDecoration: 'none', color: 'white' }}>
                            <li>CONTACT US</li>
                        </Link>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
