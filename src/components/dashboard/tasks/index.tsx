import { FC, useEffect, useState } from "react";
import { ITask } from "../../../models";
import FilterHeader from "../../share/filter";
import Table from "../../share/table";
import tableData from "../../share/table/table.json";
import SubFilterHeader from "../../share/subFilter";
import Pagination from "../../share/pagination";
import Modal from "../../share/modal";
import CreateAndEditTask from "./createAndEditTask";

const TasksComponent: FC = () => {
  const [taskData, setTaskData] = useState<ITask[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (tableData) {
      setTaskData(tableData);
    }
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <FilterHeader openModal={openModal} />
      <SubFilterHeader />
      <Table data={taskData} openModal={openModal} />
      <div className='mt-2'>
        <Pagination
          totalItems={taskData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        position='right'
        isShowIconClose={false}
      >
        <CreateAndEditTask onClose={closeModal} />
      </Modal>
    </>
  );
};

export default TasksComponent;
