import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div className="container mx-auto mt-14">
            <div className="text-center">
                <h1 className="text-orange-400 text-2xl">Contact Us</h1>
                <h1 className="text-3xl font-bold mt-5">We Are Availabe 24 hours in Uttara</h1>
            </div>
            <div className="grid grid-cols-3 mt-7">
                <div className="text-center">
                     <p className="text-2xl font-medium">Please Visit Our <span className="text-blue-400 text-3xl">Facebook </span>Page</p>
                     <Link className="bg-orange-400 text-white text-center px-2 py-1 rounded-md" to="https://www.facebook.com/profile.php?id=61552735910975">Click here</Link>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-medium"><span className="text-orange-400 text-3xl">Office </span>Address</h1>
                    <p>Road-18, Sector-03</p>
                    <p>Uttara, Dhaka</p>
                </div>
                <div className="text-center">
                     <p className="text-2xl font-medium">Call Us on <span className="text-green-400 text-3xl" >Whatsapp</span></p>
                     <Link> <span className="bg-orange-400 px-2 py-1 rounded-md text-white">Whatsapp:</span>+8801744912595</Link>
                </div>
                
            </div>
        </div>
    );
};

export default Contact;