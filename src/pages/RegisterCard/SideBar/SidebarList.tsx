import {
  FileOutlined,
  FileTextOutlined,
  HistoryOutlined,
  NodeIndexOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const SidebarList = () => {
  return (
    <div className="sidebarList">
      <ul>
        <li>
          <NavLink to="/docCard/">
            <FileTextOutlined /> <p>Əsas məlumatlar</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/docCard/commandInfo">
            <FileOutlined />
            <p>Əmr məlumatları</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/docCard/electronicForm">
            <PaperClipOutlined /> <p>Elektron Forma</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/docCard/distributionList">
            <NodeIndexOutlined /> <p>Paylanacaqlar siyahısı</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/docCard/history">
            <HistoryOutlined /> <p>Əməliyyat tarixçəsi</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidebarList;
