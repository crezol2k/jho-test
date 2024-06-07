import { FC, ReactNode } from "react";

interface TabProps {
  label: string;
  icon: string;
  content: ReactNode;
}

const Tab: FC<TabProps> = ({ label, content }) => {
  return (
    <div>
      {label}
      {content}
    </div>
  );
};

export default Tab;
