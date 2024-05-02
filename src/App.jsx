import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Header";
import Menu from "./components/Header";
import Contact from "./components/Header";
import About from "./components/Header";

import Login from "./components/Login";
import SignUp from "./components/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <div>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/menu" element={<Menu></Menu>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/about" element={<About></About>}></Route>
          </div>
          <div>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
          </div>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
