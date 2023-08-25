import React from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../../db";
import { hamburger } from "../assets/icons";

const Header = () => {
  return (
    <nav className="flex items-center justify-between max-container">
      <div>
        <a href="/">
          <img src={headerLogo} alt="nike_logo" />
        </a>
      </div>
      <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden list-none gap">
        {navLinks.map((link, index) => (
          <li key={index} className="info-text cursor-pointer">
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <div className="hidden max-lg:block">
        <img src={hamburger} width={25} height={25} alt='ham_menu' />
      </div>
    </nav>
  );
};

export default Header;
