import { EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import { useAppSelector } from "../../../hook/hook";
import "../commandInfoRoutes/style.css";

const ElectronicFormRoute = () => {
  const dataValue = useAppSelector((state) => state.uploadFile.file);
  console.log("dataValue", dataValue?.uid);

  const dataSource = [
    {
      name: dataValue?.name,
      content: dataValue?.lastModified,
      type: dataValue?.type,
      percent: dataValue?.percent,
    },
  ];

  const columns = [
    {
      title: "Əlavə edilən sənədin adı",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Əlavə edilən sənədin məzmunu",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Vərəq sayı",
      dataIndex: "percent",
      key: "percent",
    },
    {
      title: "Əlavə edilən sənədin növü",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Konfidensiallıq",
    },
  ];
  return (
    <div className="main-info-container">
      <div className="command-info-title">
        <h2>Elektron Forma</h2>
        <Button>
          <EditOutlined /> Dəyişdirmə
        </Button>
      </div>
      <div className="command-info-table">
        <Table dataSource={dataSource} columns={columns} />
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

export default ElectronicFormRoute;
