import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Header";



const Head = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Head;