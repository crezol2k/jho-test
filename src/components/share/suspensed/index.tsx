import { FC, Suspense } from "react";
import SuspenceLoading from "../../../layout/atoms/SuspenceLoading";
import { WithChildren } from "../../../models";


const SuspensedView: FC<WithChildren> = ({ children }) => {
  return <Suspense fallback={<SuspenceLoading />}>{children}</Suspense>;
};

export default SuspensedView;
