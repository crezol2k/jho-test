import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

interface IProps {
  title?: string;
  to?: string;
  icon?: React.ReactNode;
  selected?: string;
  setSelected?: (title: string) => void;
  isCollapse?: boolean;
}

const SideBarItem: React.FC<IProps> = ({
  title,
  to = "",
  icon,
  selected,
  setSelected,
  isCollapse,
}) => {
  return (
    <Link
      to={to}
      className='sidebar-link'
      onClick={() => setSelected && title && setSelected(title)}
    >
      <div
        className={`sidebar-item ${selected === title ? "selected" : ""} ${
          isCollapse ? "collapse" : ""
        }`}
      >
        <div className='icon'>{icon}</div>
        {!isCollapse && <div className='title'>{title}</div>}
      </div>
    </Link>
  );
};

export default SideBarItem;
