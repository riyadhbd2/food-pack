import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";


const Header = () => {
    return (
        <nav className="container mx-auto lg:flex justify-between py-5 mt-5">
           <div className="lg:flex items-center space-x-3 text-3xl font-bold">
            <img className="lg:w-16 sm:w-20" src={Logo} alt=""/>
            <h1><span className="text-orange-400">Food </span>Pack</h1>
           </div>
           <div className="lg:flex space-x-5">
                <Link to="/" className="hover:text-orange-400 text-lg">Home</Link>
                <Link to="/menu" className="hover:text-orange-400 text-lg">Menu</Link>
                <Link to="/contact" className="hover:text-orange-400 text-lg">Contact</Link>
                <Link to="/about" className="hover:text-orange-400 text-lg">About</Link>
           </div>
           <div>
                <Link to="/login" className="hover:text-orange-400 text-lg">Login</Link>
                <Link to="/signup" className="hover:text-orange-400 text-lg ml-2">SignUp</Link>
           </div>
           
        </nav>
    );
};

export default Header;