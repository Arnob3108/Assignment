import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <div>
      <div
        className={
          color
            ? "navbar glass-effect fixed z-50 top-0 left-0 duration-1000 lg:px-32"
            : "navbar fixed z-10 duration-1000 top-0 left-0"
        }
      >
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-[40px] font-medium">
            O-K
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <NavLink to={"/projects"}>Projects</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
