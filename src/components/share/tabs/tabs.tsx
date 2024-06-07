import { FC, ReactElement, ReactNode, useState } from "react";
import "./tab.css";

interface TabProps {
  label: string;
  icon: string;
  content: ReactNode;
}

interface TabsProps {
  children: ReactElement<TabProps>[];
}

const Tabs: FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(3);

  return (
    <div className='tabs'>
      <div className='tab-list'>
        {children.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${index === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            <img src={tab.props.icon} alt="tab-icon" />
            <span>
              {tab.props.label}
            </span>

          </button>
        ))}
      </div>
      <div className='tab-content'>{children[activeTab].props.content}</div>
    </div>
  );
};

export default Tabs;
