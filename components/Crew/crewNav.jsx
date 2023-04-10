"use client";

import "./crewNav.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CrewNav = () => {
  const path = usePathname();
  return (
    <>
      <nav className="crew-navbar">
        <ul className="crew-list">
          <Link href="/crew/douglas-hurley">
            <button
              className={path === "/crew/douglas-hurley" ? "btn-active" : "btn"}
            />
          </Link>

          <Link href="/crew/mark-shuttleworth">
            <button
              className={
                path === "/crew/mark-shuttleworth" ? "btn-active" : "btn"
              }
            />
          </Link>

          <Link href="/crew/victor-glover">
            <button
              className={path === "/crew/victor-glover" ? "btn-active" : "btn"}
            />
          </Link>

          <Link href="/crew/anousheh-ansari">
            <button
              className={
                path === "/crew/anousheh-ansari" ? "btn-active" : "btn"
              }
            />
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default CrewNav;
