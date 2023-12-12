import { Table } from "antd";
import { useAppSelector } from "../../../../hook/hook";

const OtherStructure = () => {
  const dataValue = useAppSelector((state) => state.taskCard.data);
  const distributionListData = dataValue?.distributionList.anotherUnitEmployees;
  const dataSource =
    distributionListData?.map((item) => ({
      no: item.id,
      name: item.name,
      position: item.position,
    })) || [];

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
        <h2>Digər strukturla razılaşdırılma</h2>
      </div>
      <div className="info-table">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default OtherStructure;
