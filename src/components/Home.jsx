import About from "./About";
import Hero from "./Hero";
import Menu from "./Menu";

const Home = () => {
  let slides = [
    "https://png.pngtree.com/background/20230612/original/pngtree-big-plate-of-fried-food-and-hamburgers-picture-image_3180004.jpg",
  ];
  return (
    <>
        <div className="w-[60%] m-auto pt-7">
          <Hero slides={slides}></Hero>
        </div>
        <div>
            <About></About>
        </div>
        <div>
            <Menu></Menu>
        </div>
    </>
  );
};

export default Home;
