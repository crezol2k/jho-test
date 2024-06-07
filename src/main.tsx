import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"
import RootRoutes from "./routers";

const container = document.getElementById("root");

if (container) {
  createRoot(container).render(
    <BrowserRouter>
      <RootRoutes />
      <ToastContainer />
    </BrowserRouter>
  );
}
