import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <div>Error</div>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        }
      ]
    },
  ]);

export default router;