"use client"
import { useState } from 'react';
import GetInTouch from './GetInTouch';
import HeaderLogo from './HeaderLogo';
import HamburgerMenu from './HamburgerMenu';

import NavMobile from './NavMobile';
import Nav from './Nav';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {

        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-lg fixed w-full z-10">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between ">
                <HeaderLogo />
                <Nav />
                <GetInTouch />
                <HamburgerMenu toggleMenu={toggleMenu} />
            </div>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
                <NavMobile />
            </div>
        </header>
    );
};

export default Header;
