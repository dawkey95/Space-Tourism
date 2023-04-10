"use client";

import './tabletCrewNav.css';
import Link from "next/link";
import { usePathname } from "next/navigation";

const TabletCrewNav = () => {
  const path = usePathname();
  return (
    <>
      <nav className="tablet-crew-navbar">
        <ul className="tablet-crew-list">
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

export default TabletCrewNav;
