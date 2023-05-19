import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Slider from "./components/Slider";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import Menu from "./components/Menu";
import About from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Slider /> },
      { path: "/Menu", element: <Menu /> },
      { path: "/About", element: <About /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
