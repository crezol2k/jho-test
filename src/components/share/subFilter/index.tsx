import { FC } from "react";
import "./subfilter.css";
import MailIcon from "../../../assets/icons/dashboard/mail.svg";
import PhoneIcon from "../../../assets/icons/dashboard/phone.svg";

const SubFilterHeader: FC = () => {
  return (
    <section className='section-sub-filter'>
      <div className='section-sub-filter__item'>
        <span>Tout</span>
      </div>
      <div className='section-sub-filter__item contact'>
        <div className='contact-item'>
          <img src={MailIcon} alt='mail-icon' />
          <span>Appel</span>
        </div>

        <div className='contact-item'>
          <img src={PhoneIcon} alt='phone-icon' />
          <span>E-mail</span>
        </div>
      </div>

      <div className='section-sub-filter__item nth-3'>
        <span>À faire</span>
        <span>En retard</span>
        <span>{"Aujourd’hui"}</span>
        <span>Demain</span>
      </div>

      <div className='section-sub-filter__item nth-4'>
        <span>P1</span>
        <span>P2</span>
        <span>P3</span>
      </div>
    </section>
  );
};

export default SubFilterHeader;
