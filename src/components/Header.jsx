import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";


const Header = () => {
    return (
        <nav className="container mx-auto flex justify-between items-center py-5 mt-5">
           <div className="flex items-center space-x-3 text-3xl font-bold">
            <img className="w-16" src={Logo} alt=""/>
            <h1> <span className="text-orange-400 mr-1">Food</span>Pack</h1>
           </div>
           <div className="flex items-center space-x-5">
                <Link to="/" className="hover:text-orange-400 text-lg">Home</Link>
                <Link className="hover:text-orange-400 text-lg">Menu</Link>
                <Link className="hover:text-orange-400 text-lg">Contact</Link>
                <Link className="hover:text-orange-400 text-lg">About</Link>
           </div>
        </nav>
    );
};

export default Header;