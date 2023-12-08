import { EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useAppSelector } from "../../../hook/hook";

const FourthChild = () => {
  const cardValue = useAppSelector((state) => state.taskCard.data);
  return (
    <div className="command-info-container">
      <div className="command-info-title">
        <h2>Əsas</h2>
        <Button>
          <EditOutlined /> Dəyişdirmə
        </Button>
      </div>
      <div className="command-info-content">
        <div>
          <p>{cardValue?.orderData.mainTextData.body}</p>
        </div>
      </div>
      <div className="command-info-btn">
        <Button>Sənədə bax</Button>
        <p>
          <InfoCircleOutlined /> Bölmələr üzrə zəruri xanalar doldurulduğu halda
          "Sənədə bax" düyməsi aktiv olacaq.
        </p>
      </div>
    </div>
  );
};

export default FourthChild;
