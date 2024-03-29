import React, { useState } from "react";
import ROUTES from "@/constants/routes";
import Link from 'next/link';


const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

return (
    <header className="z-50 relative flex items-center js mx-auto md:sticky top-0 h-[10vh] w-4/5 justify-between md:backdrop-blur-sm md:flex-row">
      <div className="text-xl font-bold tracking-widest text-center md:text-2xl">
        <a href="/">
          <p>Jeonghyeon</p>
        </a>
      </div>
      <button className="cursor-pointer md:hidden" onClick={() => setToggleMenu(!toggleMenu)}>
        {toggleMenu ? 'Close' : 'Open'}
      </button>
      <nav
        className={`absolute top-[10vh] transition-all duration-300 ease-in md:static md:opacity-100 left-0 w-full md:w-fit ${
          toggleMenu ? 'top-[10vh] opacity-100 md:top-0' : 'top-[-50vh] opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-5 py-5 text-base text-center md:flex-row md:gap-10 md:text-lg">
          <li onClick={() => setToggleMenu(!toggleMenu)}>
            <a href={ROUTES.HOME}>Home</a>
          </li>
          <li onClick={() => setToggleMenu(!toggleMenu)}>
            <Link href={ROUTES.ABOUT}>About</Link>
          </li>
          <li onClick={() => setToggleMenu(!toggleMenu)}>
            <Link href={ROUTES.EXPERIENCE}>Experiences</Link>
          </li>
          <li onClick={() => setToggleMenu(!toggleMenu)}>
            <Link href={ROUTES.PROJECTS}>Projects</Link>
          </li>
          {/* <li onClick={() => setToggleMenu(!toggleMenu)}>
            <Link href={ROUTES.MORE}>More</Link>
          </li> */}
          <li onClick={() => setToggleMenu(!toggleMenu)}>
            <Link href={ROUTES.CONTACT}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;