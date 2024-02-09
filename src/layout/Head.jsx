import { Outlet } from "react-router-dom";
import Header from "../Header";


const Head = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Head;