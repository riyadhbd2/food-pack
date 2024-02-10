import { Link } from "react-router-dom";
import Item1 from "../assets/resturant-1.jpeg";

const Menu = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          <span className="text-orange-400 text-3xl">Order </span>Your Foods By Choosing Resturant
        </h1>
      </div>
      {/* All resturant Name  */}
      <div className="grid lg:grid-cols-3 mt-11 gap-5">
        {/* Resturant 1 */}
        <div className="border p-5 text-center ">
          <img src={Item1} alt="" />
          <h1>One</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, blanditiis.
          </p>
          <Link><button className="bg-orange-400 text-white px-1 py-1 rounded-lg">
            See details</button></Link>
        </div>
        <div className="border p-5 text-center">
          <img src={Item1} alt="" />
          <h1>One</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, blanditiis.
          </p>
          <Link
            to="/details"
            className="bg-orange-400 text-white px-2 py-1 rounded-lg"
          >
            See details
          </Link>
        </div>
        <div className="border p-5 text-center">
          <img src={Item1} alt="" />
          <h1>One</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, blanditiis.
          </p>
          <Link
            to="/details"
            className="bg-orange-400 text-white px-2 py-1 rounded-lg"
          >
            See details
          </Link>
        </div>
        <div className="border p-5 text-center">
          <img src={Item1} alt="" />
          <h1>One</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, blanditiis.
          </p>
          <Link
            to="/details"
            className="bg-orange-400 text-white px-2 py-1 rounded-lg"
          >
            See details
          </Link>
        </div>
        <div className="border p-5 text-center">
          <img src={Item1} alt="" />
          <h1>One</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, blanditiis.
          </p>
          <Link
            to="/details"
            className="bg-orange-400 text-white px-2 py-1 rounded-lg"
          >
            See details
          </Link>
        </div>
        <div className="border p-5 text-center">
          <img src={Item1} alt="" />
          <h1>One</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, blanditiis.
          </p>
          <Link
            to="/details"
            className="bg-orange-400 text-white px-2 py-1 rounded-lg"
          >
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
