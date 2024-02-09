import { Outlet } from "react-router-dom";
import Header from "../components/Header";



const Head = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Head;