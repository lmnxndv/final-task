import { Button } from "antd";
import { useAppSelector } from "../../hook/hook";
import "./style.css";
import { classificationData, nomenclatureData } from "../../data/data";

const MainInformation: React.FC = () => {
  const infoState = useAppSelector((state) => state.main.items);
  console.log("useSelector", infoState);

  return (
    <div>
      <div className="page-row">
        <h2>Əsas məlumatlar</h2>
        <div className="sections">
          <div>
            <p>Təsnifat</p>
            <p>
              {
                classificationData.options.find(
                  (app) => app.value === infoState?.classification
                )?.label
              }
            </p>
          </div>
          <div>
            <p>Nomenklatura</p>
            <p>
              {
                nomenclatureData.options.find(
                  (app) => app.value === infoState?.classification
                )?.label
              }
            </p>
          </div>
          <div>
            <p>Konfidensial</p>
            <p>{infoState?.nomenclatureCheck ? "Beli" : "Xeyr"}</p>
          </div>
          <div>
            <p>Məzmun</p>
            <p>{infoState?.content}</p>
          </div>
        </div>
        <Button type="primary">Sənədə bax</Button>
      </div>
    </div>
  );
};

export default MainInformation;
