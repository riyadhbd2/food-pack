import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Head from "./layout/Head";
import Home from "./components/Home";
import Menu from './components/Menu';
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/SignUp";



const App = () => {
  const router = createBrowserRouter([
    {path: "/",
    element: <Head></Head>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/menu",
        element: <Menu></Menu>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/signup",
        element: <SignUp></SignUp>
      }

    ]
  },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;