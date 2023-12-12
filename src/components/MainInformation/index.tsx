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
            <span>
              {
                classificationData.options.find(
                  (app) => app.value === infoState?.classification
                )?.label
              }
            </span>
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
            <p>Konfidensial</p>
            <span>{infoState?.nomenclatureCheck ? "Bəli" : "Xeyr"}</span>
          </div>
          <div>
            <p>Məzmun</p>
            <span>{infoState?.content}</span>
          </div>
        </div>
        <Button type="primary">Sənədə bax</Button>
      </div>
    </div>
  );
};

export default MainInformation;
