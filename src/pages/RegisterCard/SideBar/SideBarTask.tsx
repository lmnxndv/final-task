import { useState } from "react";
import {
  AlignLeftOutlined,
  CheckCircleOutlined,
  FolderOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAppSelector } from "../../../hook/hook";
import { classificationData } from "../../../data/data";
import SidebarList from "./SidebarList";

const SideBarTask = () => {
  const [date, setDate] = useState(new Date());
  const infoState = useAppSelector((state) => state.main.items);

  return (
    <div className="sidebarTask">
      <div className="title">
        <p>TAPŞIRIQ</p>
        <span>İcradadır</span>
      </div>
      <div className="execution">
        <p>
          <UserOutlined /> İcraçı:
        </p>
      </div>
      <hr />
      <div className="title">
        <p>SƏNƏD</p>
        <span>İlkin məlumat</span>
      </div>
      <div className="taskInfo">
        <ul>
          <li>
            <CheckCircleOutlined />
            Qeydiyyat №: 
          </li>
          <li>
            <FolderOutlined />
            Qeydiyyat tarixi: <span> {date.toLocaleDateString()}</span>
          </li>
          <li>
            <AlignLeftOutlined />
            Sənədin tipi: <span> Əmr</span>
          </li>
          <li>
            <AlignLeftOutlined />
            Sənədin növü: <span> Əsas fəaliyyət üzrə(Digər)</span>
          </li>
          <li>
            <AlignLeftOutlined />
            Təsnifat:
            <span>
              {
                classificationData.options.find(
                  (app) => app.value === infoState?.classification
                )?.label
              }
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarTask;
