import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"; // ✅ add this
import { store } from "./redux/store"; // ✅ import your store

import "./index.css";
import routes from "./routes/Routes";

import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* ✅ Wrap Redux Provider around RouterProvider */}
    <Provider store={store}>
      <RouterProvider router={routes} />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
        transition={Bounce}
      />
    </Provider>
  </StrictMode>
);
