import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="grid justify-items-center">
            <h1 className="font-bold">Log In</h1>
            <form>   
                <div>
                    <p>Email</p>
                    <input className="border border-green-500 " type="email" name="email" id="" />
                </div>
                <div>
                    <p>Password</p>
                    <input className="border border-green-500 " type="password" name="password" id="" />
                </div>
                <p>New in Food Pack? <Link to="/login" className="text-orange-500">Sign Up</Link></p>
            </form>
        </div>
    );
};

export default Login;