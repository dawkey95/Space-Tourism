"use client";

import "./destinationNav.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DestinationNav = () => {
  const path = usePathname();
  return (
    <>
      <nav className="destination-navbar">
        <ul className="destination-list">
          <Link
            className={
              path === "/destination/moon"
                ? "moon planet-active"
                : "moon planet"
            }
            href="/destination/moon"
          >
            Moon
          </Link>
          <Link
            className={
              path === "/destination/mars"
                ? "mars planet-active"
                : "mars planet"
            }
            href="/destination/mars"
          >
            Mars
          </Link>
          <Link
            className={
              path === "/destination/europa"
                ? "europa planet-active"
                : "europa planet"
            }
            href="/destination/europa"
          >
            Europa
          </Link>
          <Link
            className={
              path === "/destination/titan"
                ? "titan planet-active"
                : "titan planet"
            }
            href="/destination/titan"
          >
            Titan
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default DestinationNav;
