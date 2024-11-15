import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import CardPage from "../pages/CardPage";
import CardGallery from "../pages/CardGallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CardGallery />
      },
      {
        path: "/Card",
        element: <CardPage />,
      }
    ]
  }
])