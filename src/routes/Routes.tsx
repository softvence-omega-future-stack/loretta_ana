import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/machines/machines-overview" replace />, // Only root redirects
  },
  {
    path: "/*",
    element: <App />,
  },
]);

export default routes;
