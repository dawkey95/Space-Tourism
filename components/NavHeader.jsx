"use client";

import Image from "next/image";
import Link from "next/link";
import "./NavHeader.css";
import { useState } from "react";

const NavHeader = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <Image
          src="/assets/shared/logo.svg"
          width={40}
          height={40}
          alt="logo"
        />

        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded="false"
          onClick={handleClick}
        >
          {nav ? (
            <Image
              className="close"
              src="/assets/shared/icon-close.svg"
              width={24}
              height={21}
              alt="close"
            />
          ) : (
            <Image
              className="hamburger"
              src="/assets/shared/icon-hamburger.svg"
              width={24}
              height={21}
              alt="menu"
            />
          )}
        </button>

        <nav>
          <ul
            id="primary-navigation"
            className={nav ? "primary-navigation-active" : "primary-navigation"}
          >
            <li>
              <Link className="nav-home" href="/">
                <strong aria-hidden="true">00</strong>Home
              </Link>
            </li>
            <li>
              <Link className="nav-destination" href="/destination/moon">
                <strong aria-hidden="true">01</strong>Destinations
              </Link>
            </li>
            <li>
              <Link className="nav-crew" href="/crew/douglas-hurley">
                <strong aria-hidden="true">02</strong>Crew
              </Link>
            </li>
            <li>
              <Link
                className="nav-technology"
                href="/technology/space-launcher"
              >
                <strong aria-hidden="true">03</strong>Technology
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavHeader;
