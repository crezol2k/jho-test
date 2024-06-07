import { ReactNode } from "react";

export interface IListNavigate {
  id: number;
  title: string;
  url: string;
  icon: string;
}

export type WithChildren = {
  children?: ReactNode;
};

export interface ITask {
  id: number;
  release: boolean;
  title: string;
  date_due: string;
  email: string;
  opportunity: string;
  status: string;
  contact: string;
  responsable: string;
  date_at: string;
}

export interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}


export interface IUser {
  email: string;
  role: string;
}

export interface ILogin {
  email: string;
  password: string;
}