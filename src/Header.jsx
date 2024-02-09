import { Link } from "react-router-dom";
import Logo from "./assets/logo.jpg";


const Header = () => {
    return (
        <nav className="container mx-auto flex justify-between items-center py-5">
           <div className="flex items-center space-x-3 text-3xl font-bold">
            <img className="w-16" src={Logo} alt=""/>
            <h1>Food Pack</h1>
           </div>
           <div className="flex items-center space-x-5">
                <Link>Home</Link>
                <Link>Menu</Link>
                <Link>Contact</Link>
                <Link>About us</Link>
           </div>
        </nav>
    );
};

export default Header;