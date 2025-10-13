import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import LoginPage from "@/pages/login/login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/machines/machines-overview" replace />, // Only root redirects
  },
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "login",
    element: <LoginPage />,
  }
]);

export default routes;
