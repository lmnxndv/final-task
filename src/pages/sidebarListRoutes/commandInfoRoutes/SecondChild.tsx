import { Button, Table } from "antd";
import { useAppSelector } from "../../../hook/hook";
import { EditOutlined, InfoCircleOutlined } from "@ant-design/icons";

const SecondChild = () => {
  const dataValue = useAppSelector((state) => state.taskCard.data);
  const commandDataDams = dataValue?.orderData.commandData.bands;
  const dataSource =
    commandDataDams?.map((item, index) => ({
      key: index,
      no: index + 1,
      dam: item.body,
    })) || [];

  const columns = [
    {
      title: "№",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Bənd",
      dataIndex: "dam",
      key: "dam",
    },
  ];

  return (
    <div className="command-info-container">
      <div className="command-info-title">
        <h2>Bəndlər</h2>
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

export default SecondChild;
