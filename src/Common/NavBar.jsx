import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-row text-center font-bold font-serif justify-evenly my-5">
          <li className="hover:text-white hover:bg-black px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-white hover:bg-black px-3">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-white hover:bg-black px-3">
            <Link to="/article">Articles</Link>
          </li>
        </ul>
        <hr className="border-black border-2 lg:border-4"></hr>
      </nav>
    </div>
  );
};

export default NavBar;
