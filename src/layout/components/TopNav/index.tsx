import { FC, useEffect, useState } from "react";
import "./topnav.css";
import SearchIcon from "../../../assets/icons/search.svg";
import NotiIcon from "../../../assets/icons/notification.svg";
import QuestionIcon from "../../../assets/icons/messages_question.svg";
import SettingIcon from "../../../assets/icons/setting.svg";
import Avatar from "../../../assets/icons/avatar.svg";
import { IUser } from "../../../models";
import { ME } from "../../../constant/auth";

const TopNav: FC = () => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const response: string | null = localStorage.getItem(ME);
    if (response) {
      setUser(JSON.parse(response));
    }
  }, []);

  return (
    <div className='top-navigate'>
      <div className='top-navigate__middle'>
        <div className='search-container'>
          <input
            type='text'
            className='search-input'
            placeholder='Rechercher dans Metaforma'
          />
          <img src={SearchIcon} alt='search-icon' className='search-icon' />
        </div>
        <div>
          <button className='btn btn-added'>+</button>
        </div>
      </div>
      <div className='top-navigate__right'>
        <div className='func-icon'>
          <img src={NotiIcon} alt='noti-icon' className='func-icon' />
          <img src={QuestionIcon} alt='question-icon' className='func-icon' />
          <img src={SettingIcon} alt='setting-icon' className='func-icon' />
        </div>
        <div className='infomation-user'>
          <img src={Avatar} alt='avatar' className='avatar' />
          <div className='user-name'>
            <span className='user-name__fullName'>{user?.email || ""}</span>
            <span className='user-name__position'>{user?.role || ""}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
