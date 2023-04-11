"use client";

import Image from "next/image";
import Link from "next/link";
import "./NavHeader.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";

const NavHeader = () => {
  const [nav, setNav] = useState(false);
  const path = usePathname();

  const handleClick = () => {
    setNav((prev) => !prev);
  };

  const checkDestination = () => {
    if (path === "/destination/moon") {
      return "nav-destination active-link";
    } else if (path === "/destination/mars") {
      return "nav-destination active-link";
    } else if (path === "/destination/titan") {
      return "nav-destination active-link";
    } else if (path === "/destination/europa") {
      return "nav-destination active-link";
    } else {
      return "nav-destination";
    }
  };

  const checkCrew = () => {
    if (path === "/crew/douglas-hurley") {
      return "nav-crew active-link";
    } else if (path === "/crew/mark-shuttleworth") {
      return "nav-crew active-link";
    } else if (path === "/crew/victor-glover") {
      return "nav-crew active-link";
    } else if (path === "/crew/anousheh-ansari") {
      return "nav-crew active-link";
    } else {
      return "nav-crew";
    }
  };

  const checkTech = () => {
    if (path === "/technology/space-launcher") {
      return "nav-technology active-link";
    } else if (path === "/technology/space-port") {
      return "nav-technology active-link";
    } else if (path === "/technology/space-capsule") {
      return "nav-technology active-link";
    } else {
      return "nav-technology";
    }
  };

  return (
    <>
      <header className="header">
        <Image
          className="logo"
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
            className={
              nav
                ? "primary-navigation-active"
                : "primary-navigation tablet-primary"
            }
          >
            <li>
              <Link
                className={path === "/" ? "nav-home active-link" : "nav-home"}
                href="/"
              >
                <strong aria-hidden="true">00</strong>Home
              </Link>
            </li>
            <li>
              <Link className={checkDestination()} href="/destination/moon">
                <strong aria-hidden="true">01</strong>Destinations
              </Link>
            </li>
            <li>
              <Link className={checkCrew()} href="/crew/douglas-hurley">
                <strong aria-hidden="true">02</strong>Crew
              </Link>
            </li>
            <li>
              <Link className={checkTech()} href="/technology/space-launcher">
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
