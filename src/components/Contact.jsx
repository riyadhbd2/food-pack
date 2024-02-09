import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div className="container mx-auto mt-11">
            <div className="text-center">
                <h1 className="text-yellow-400">Contact Us</h1>
                <h1 className="text-3xl font-bold">Now We Are Availabe 24 hours only in Uttara</h1>
            </div>
            <div className="flex justify-between">
                <div>
                     <p className="text-2xl font-medium">Please Visit Our <span className="text-blue-400">Facebook </span>Page</p>
                     <Link>FaceBook</Link>
                </div>
                <div>
                    <h1>Office Address</h1>
                    <p>Road-18, Sector-03</p>
                    <p>Uttara, Dhaka</p>
                </div>
                <div>
                     <p className="text-2xl font-medium">Please Call Us on <span className="text-green-400" >Whatsapp</span></p>
                     <Link>Whatsapp</Link>
                </div>
                
            </div>
        </div>
    );
};

export default Contact;