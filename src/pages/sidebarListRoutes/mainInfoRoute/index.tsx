import { Table } from "antd";
import {
  appointmentData,
  classificationData,
  nomenclatureData,
} from "../../../data/data";
import { useAppSelector } from "../../../hook/hook";
import "./style.css";

const MainInfoRoute = () => {
  const infoState = useAppSelector((state) => state.main.items);


  
  const columns = [
    {
      title: 'Qeydiyyat nömrəsi',
    },
    {
      title: 'Qeydiyyat tarixi',
    },
    {
      title: 'Məzmun',
    },
    {
      title: 'Tip',
    },
    {
      title: 'Növ',
    },
    {
      title: 'Əlaqə növü',
    },
    {
      title: 'Status',
    },
  ];

  return (
    <div className="main-info-container">
      <h2 className="text-center">Əsas məlumatlar</h2>
      <div className="main-information">
        <div>
          <p>Sənədin tipi</p>
          <span>Əmr</span>
        </div>
        <div>
          <p>Sənədin növü</p>
          <span>
            Əsas fəaliyyət üzrə(
            {
              classificationData.options.find(
                (app) => app.value === infoState?.classification
              )?.label
            }
            )
          </span>
        </div>
        <div>
          <p>Təsnifat</p>
          <span>
            {" "}
            {
              classificationData.options.find(
                (app) => app.value === infoState?.classification
              )?.label
            }
          </span>
        </div>
        <div>
          <p>Təyinatı</p>
          <span>
            {
              appointmentData.options.find(
                (app) => app.value === infoState?.appointment
              )?.label
            }
          </span>
        </div>
        <div>
          <p>Konfidensial</p>
          <span>{infoState?.nomenclatureCheck ? "Beli" : "Xeyr"}</span>
        </div>
        <div>
          <p>Nomenklatura</p>
          <span>
            {
              nomenclatureData.options.find(
                (app) => app.value === infoState?.classification
              )?.label
            }
          </span>
        </div>
        <div>
          <p>Normativ sənəd</p>
          <span>{infoState?.nomenclatureCheck ? "Beli" : "Xeyr"}</span>
        </div>
      </div>
      <div className="main-info-content">
        <div>
          <p>Məzmun</p>
          <span>{infoState?.content}</span>
        </div>
      </div>
      <div className="main-info-answering-document">
        <h2>Cavablandırılan sənəd</h2>
        <p>Siyahı boşdur</p>
      </div>
      <div className="main-info-answering-document">
        <h3>Əlaqəli sənədlər</h3>
        <Table columns={columns} />
      </div>
    </div>
  );
};

export default MainInfoRoute;
