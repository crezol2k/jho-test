import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../../assets/icons/sidebar/logout.svg";
import { AUTH, ME } from "../../../constant/auth";
import { IListNavigate } from "../../../models";
import ListNavigate from "./data";
import "./sidebar.css";
import SideBarItem from "./SideBarItem";

const Sidebar: FC = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const handleLogout = () => {
    localStorage.removeItem(AUTH);
    localStorage.removeItem(ME);
    navigate("/login");
  };

  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <img src='/logo.svg' alt='logo' />
      </div>

      <div className='sidebar-middle'>
        {ListNavigate.map((navItem: IListNavigate) => (
          <SideBarItem
            key={navItem.id}
            title={navItem.title}
            to={navItem.url}
            icon={
              <img
                src={navItem.icon}
                alt={`${navItem.title}-icon`}
                className='icon-svg'
              />
            }
            selected={selected}
            setSelected={setSelected}
            isCollapse={true}
          />
        ))}
      </div>

      <div className='sidebar-footer'>
        <button className='btn-navbar btn-logout' onClick={handleLogout}>
          <img src={LogoutIcon} alt='logout-icon' />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
