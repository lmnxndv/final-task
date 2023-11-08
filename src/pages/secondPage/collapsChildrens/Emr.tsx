import { Button, Table } from "antd";
import TextArea from "antd/es/input/TextArea";

// const dataSource = [
//     {
//       key: '1',
//       name: 'Mike',
//       age: 32,
//       address: '10 Downing Street',
//     },
//     {
//       key: '2',
//       name: 'John',
//       age: 42,
//       address: '10 Downing Street',
//     },
//   ];

const columns = [
  {
    title: "№",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "Bənd",
    dataIndex: "bənd",
    key: "bənd",
  },
];

const Emr = () => {
  return (
    <div>
      <div className="emr-first-row">
        <h4>Bəndin mətni</h4>
        <TextArea rows={4} />
      </div>
      <div className="addTextBtn">
        <Button
          type="primary"
          style={{ background: "#008000", color: "#fff", width: 100 }}
        >
          Əlavə et
        </Button>
      </div>
      <div className="emr-second-row">
        <h4>Bəndlər</h4>
        <Table columns={columns} />
      </div>
    </div>
  );
};

export default Emr;
