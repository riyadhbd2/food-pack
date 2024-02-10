import Burger from "../assets/burger.png";

const About = () => {
    return (
        <div className="container mx-auto lg:grid grid-cols-2 mt-14 items-center">
            <div>
                <img className="w-[400px]" src={Burger} alt="" />
            </div>
            <div>
                <p className="text-orange-400 text-2xl">About us</p>
                <h1 className="text-3xl font-bold mt-5">We With The Aspects Food Delivery Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde, numquam blanditiis tenetur quisquam error odit laborum accusamus atque minima, veniam nam illo at voluptatem? Qui laudantium quos cumque consequatur!</p>
                <div className="flex mt-5 space-x-5">
                    <div>
                        <h1 className="text-2xl">Rating Star</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, ipsum.</p>
                    </div>
                    <div>
                        <h1 className="text-2xl">Free Species</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, ipsum.</p>
                    </div>

                </div>
                <div className="mt-10">
                    <button className="bg-orange-400 text-white px-3 py-2 rounded-md">About More...</button>
                </div>
            </div>
        </div>
    );
};

export default About;