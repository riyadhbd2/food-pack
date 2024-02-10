import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Menu from "./Menu";

const Home = () => {
  let slides = [
    "https://png.pngtree.com/background/20230612/original/pngtree-big-plate-of-fried-food-and-hamburgers-picture-image_3180004.jpg",
    "https://cdn.openart.ai/stable_diffusion/523f60544bf6d6978d2d707dd3fe36a662708a51_2000x2000.webp",
    "https://www.foodandwine.com/thmb/UlnhSz-U95pWkbgaRpicfsr390g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Pizza-Hut-Big-New-Yorker-Returns-FT-2-BLOG0123-8dc474301975436f88653aac5762a5c1.jpg"
  ];
  return (
    <>
        <div className="w-3/5 mx-auto pt-7">
          <Hero slides={slides}></Hero>
        </div>
        
        <div>
            <Menu></Menu>
        </div>
        <div>
            <About></About>
        </div>
        <Contact></Contact>
        <div>
            <Footer></Footer>
        </div>
    </>
  );
};

export default Home;
