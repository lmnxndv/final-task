import { EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useAppSelector } from "../../../hook/hook";

const FirstChild = () => {
  const cardValue = useAppSelector((state) => state.taskCard.data);

  return (
    <div className="command-info-container">
      <div className="command-info-title">
        <h2>Başlıq və əsaslandırma</h2>
        <Button>
          <EditOutlined /> Dəyişdirmə
        </Button>
      </div>
      <div className="command-info-content">
        <div>
          <p>Əmrin məzmunu</p>
          <span>{cardValue?.orderData?.title?.content}</span>

          <p>Preambula</p>
          <span>{cardValue?.orderData?.title?.preambula}</span>
        </div>
      </div>
      <div className="command-info-btn">
        <Button>Sənədə bax</Button>
        <p><InfoCircleOutlined /> Bölmələr üzrə zəruri xanalar doldurulduğu halda "Sənədə bax" düyməsi aktiv olacaq.</p>
      </div>
    </div>
  );
};

export default FirstChild;
