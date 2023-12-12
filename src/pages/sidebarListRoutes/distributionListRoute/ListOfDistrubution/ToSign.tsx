import { Button, Table } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useAppSelector } from "../../../../hook/hook";

const ToSign = () => {
  const dataValue = useAppSelector((state) => state.taskCard.data);
  const distributionListData = dataValue?.distributionList.signer;
  const dataSource = [
    {
      no: distributionListData?.id,
      name: distributionListData?.name,
      position: distributionListData?.position,
    },
  ];

  const columns = [
    {
      title: "№",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "SAA",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Vəzifə",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Vergi orqanı",
    },
    {
      title: "Qeyd",
    },
    {
      title: "Status",
    },
    {
      title: "Tarix",
    },
  ];
  return (
    <div className="command-info-container">
      <div className="command-info-title">
        <h2>İmzalamaya vermə</h2>
        <Button>
          <EditOutlined /> Dəyişdirmə
        </Button>
      </div>
      <div className="info-table">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default ToSign;
