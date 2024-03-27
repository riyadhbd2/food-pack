
import { Link } from "react-router-dom";

const SignUp = () => {
    
    

    return (
        <div className="grid justify-items-center">
            <h1 className="font-bold">Sign Up</h1>
            <form>
                <div>
                    <p>Email</p>
                    <input className="border border-green-500 " type="email" name="email" id="" />
                </div>
                <div>
                    <p>Password</p>
                    <input className="border border-green-500 " type="password" name="password" id="" />
                </div>
                <div>
                    <p>Confirm Password</p>
                    <input className="border border-green-500" type="password" name="confirm" id="" />
                </div>
                <button className="font-bold text-orange-500 border border-gray-500 rounded-lg mt-2 p-1 " type="submit">Submit</button>
                  
            </form>
            <p>Already have an account? <Link to="/login" className="text-orange-500">Login</Link></p>
        </div>
    );
};

export default SignUp;