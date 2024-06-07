import { FC } from "react";
import "./filterHeader.css";
import PlusIcon from "../../../assets/icons/dashboard/plus-border.svg";
import FilterIcon from "../../../assets/icons/dashboard/filter.svg";
import ArrowDownIcon from "../../../assets/icons/dashboard/arrow-down.svg";

import User2Icon from "../../../assets/icons/dashboard/user-2.svg";
import SearchIcon from "../../../assets/icons/search.svg";

interface Iprops {
  openModal: () => void;
}
const FilterHeader: FC<Iprops> = ({ openModal }) => {
  return (
    <section className='section-filter'>
      <div className='section-filter__left'>
        <button className='btn' onClick={openModal}>
          <img src={PlusIcon} alt='plus-icon' />
          Ajouter une tâche
        </button>
        <span>
          {50}
          <span>tâches</span>
        </span>
      </div>
      <div className='section-filter__right'>
        <div className='section-filter__right-item'>
          <div className='d-flex align-center space-between'>
            <img src={FilterIcon} alt='filter-icon' />
            <span>Plus de filtre</span>
          </div>
          <img src={ArrowDownIcon} alt='arrow-icon' />
        </div>

        <div className='section-filter__right-item ml-2 mr-2'>
          <div className='d-flex align-center space-between'>
            <img src={User2Icon} alt='user-icon' />
            <span>Tout le monde</span>
          </div>
          <img src={ArrowDownIcon} alt='arrow-icon' />
        </div>

        <div className='search-container'>
          <input
            type='text'
            className='search-input'
            placeholder='Titre, contact, responsable...'
          />
          <img src={SearchIcon} alt='search-icon' className='search-icon' />
        </div>
      </div>
    </section>
  );
};

export default FilterHeader;
