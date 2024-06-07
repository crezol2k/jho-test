import { FC } from "react";
import ContactIcon from "../../assets/icons/dashboard/contacts.svg";
import ListIcon from "../../assets/icons/dashboard/list.svg";
import OpporIcon from "../../assets/icons/dashboard/oppor.svg";
import TaskIcon from "../../assets/icons/dashboard/tasks.svg";
import Tab from "../share/tabs/tab";
import Tabs from "../share/tabs/tabs";
import "./dashboard.css";
import TasksComponent from "./tasks";

const DashboardComponent: FC = () => {
  return (
    <div className='dashboard-section'>
      <div className='dashboard-section__header'>
        <Tabs>
          <Tab label='Contacts' icon={ContactIcon} content={<></>} />
          <Tab label='Lists' icon={ListIcon} content={<></>} />
          <Tab label='Opportunités' icon={OpporIcon} content={<></>} />
          <Tab label='Tâches' icon={TaskIcon} content={<TasksComponent />} />
        </Tabs>
      </div>
      <div className='dashboard-section__info--table'></div>
      <div className='dashboard-section__main-table'></div>
    </div>
  );
};

export default DashboardComponent;
