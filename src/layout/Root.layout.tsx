import "./rootLayout.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/SideBar";
import TopNav from "./components/TopNav";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <TopNav />
      <div className="root-layout__content">
        <Sidebar />
        <div className="content_outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
