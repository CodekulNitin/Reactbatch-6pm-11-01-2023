import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
    padding:"5px"
  };
  return (
    <div className="flex justify-between p-4 z-50 fixed w-full font-semibold text-lg px-6 bg-white shadow">
      <ul>
        <li>logo</li>
      </ul>
      <ul className="flex space-x-4 items-center">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            AboutUs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactUs"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            ContactUs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profilePage"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Profile Page
          </NavLink>
        </li>

      </ul>
    </div>
  );
}
export default Navbar;
