import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <nav className="container mx-auto lg:flex justify-between py-5 mt-5">
      <div className="lg:flex items-center space-x-3 text-3xl font-bold">
        <img className="lg:w-16 sm:w-20" src={Logo} alt="" />
        <h1>
          <span className="text-orange-400">Food </span>Pack
        </h1>
      </div>
      <div className="lg:flex space-x-5">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "text-orange-500" : "text-black";
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) => {
            return isActive ? "text-orange-500" : "text-black";
          }}
        >
          Menu
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => {
            return isActive ? "text-orange-500" : "text-black";
          }}
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => {
            return isActive ? "text-orange-500" : "text-black";
          }}
        >
          About
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/login"
          className={({ isActive }) => {
            return isActive ? "text-orange-500" : "text-white";
          }}
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) => {
            return isActive ? "text-orange-500" : "text-white";
          }}
        >
          SignUp
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
