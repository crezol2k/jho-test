import React, { useState } from "react";
import CheckIcon from "../../../assets/icons/dashboard/check-circle.svg";
import DeleteIcon from "../../../assets/icons/dashboard/delete.svg";
import EditIcon from "../../../assets/icons/dashboard/edit.svg";
import MainIcon from "../../../assets/icons/dashboard/mail.svg";
import { ITask } from "../../../models";
import { formatDate } from "../../../utils/date-time";
import "./table.css";

interface TableProps {
  data: ITask[];
  openModal: () => void;
}

const Table: React.FC<TableProps> = ({ data, openModal }) => {
  const [checkedTasks, setCheckedTasks] = useState<number[]>([]);

  const handleCheckAll = () => {
    const allTaskIds = data.map((task) => task.id);
    setCheckedTasks(
      checkedTasks.length === allTaskIds.length ? [] : allTaskIds
    );
  };

  const handleCheckItem = (taskId: number) => {
    setCheckedTasks((prevCheckedTasks) =>
      prevCheckedTasks.includes(taskId)
        ? prevCheckedTasks.filter((id) => id !== taskId)
        : [...prevCheckedTasks, taskId]
    );
  };
  return (
    <section className='table-container'>
      <table>
        <thead>
          <tr>
            <th className='first-col'>
              <label className='custom-checkbox'>
                <input
                  type='checkbox'
                  checked={checkedTasks.length === data.length}
                  onChange={handleCheckAll}
                />
                <span className='checkmark'></span>
              </label>
              <span>Réalisé</span>
            </th>
            <th>Titre</th>
            <th>Date d'échéance</th>
            <th>Email</th>
            <th>Opportunité</th>
            <th>Statut</th>
            <th>Contact associé</th>
            <th>Responsable</th>
            <th>Date de création</th>
          </tr>
        </thead>
        <tbody>
          {data.map((task) => (
            <tr key={task.id}>
              <td className='first-col'>
                <label className='custom-checkbox'>
                  <input
                    type='checkbox'
                    checked={checkedTasks.includes(task.id)}
                    onChange={() => handleCheckItem(task.id)}
                  />
                  <span className='checkmark'></span>
                </label>
                <span>
                  {task.release ? (
                    <img src={CheckIcon} alt='icon' />
                  ) : (
                    <img src={CheckIcon} alt='icon' />
                  )}
                </span>
              </td>
              <td>{task.title}</td>
              <td>
                {formatDate(task.date_due).formattedDate}
                <br />
                {formatDate(task.date_due).formattedTime}
              </td>
              <td>
                <div className='d-flex align-center'>
                  <img src={MainIcon} alt='icon' className='mr-1' />
                  <span>{task.email}</span>
                </div>
              </td>
              <td>{task.opportunity}</td>
              <td>{task.status}</td>
              <td>{task.contact}</td>
              <td>{task.responsable}</td>
              <td>
                <div className='d-flex align-center line-func'>
                  <span>
                    {formatDate(task.date_at).formattedDate}
                    <br />
                    {formatDate(task.date_at).formattedTime}
                  </span>
                  <div className='line-func__icons'>
                    <img
                      src={EditIcon}
                      alt='icon'
                      className='edit-icon'
                      onClick={openModal}
                    />
                    <img src={DeleteIcon} alt='icon' />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
