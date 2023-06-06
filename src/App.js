import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import Menu from "./components/Menu";
import About from "./components/About";
import Form from "./components/Form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "./redux/slices/ProductsSlice";
import Cart from "./components/Cart";
import Signup from "./components/FormSignup"
import Home from "./components/Home"
import ResetPassword from "./components/ForgetPassword";

// import MydModal from "./components/models"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/Menu", element: <Menu /> },
      { path: "/Cart", element: <Cart /> },
      { path: "/About", element: <About /> },
      { path: "/Form", element: <Form /> },
      { path: "/signup", element: <Signup /> },
      { path: "/ResetPassword", element: <ResetPassword/>},
      // { path: "/cardinfo", element: < Mymodels/> },

    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
