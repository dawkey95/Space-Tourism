"use client";

import "./techNav.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CrewNav = () => {
  const path = usePathname();
  return (
    <>
      <nav className="tech-navbar">
        <ul className="tech-list">
          <Link href="/technology/space-launcher">
            <button
              className={
                path === "/technology/space-launcher" ? "btn-active" : "btn"
              }
            >
              1
            </button>
          </Link>

          <Link href="/technology/space-port">
            <button
              className={
                path === "/technology/space-port" ? "btn-active" : "btn"
              }
            >
              2
            </button>
          </Link>

          <Link href="/technology/space-capsule">
            <button
              className={
                path === "/technology/space-capsule" ? "btn-active" : "btn"
              }
            >
              3
            </button>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default CrewNav;
