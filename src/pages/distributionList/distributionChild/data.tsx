import { Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
interface IColumnProps {
  handleRemove: (id: number) => void;
}

export const Columns = ({ handleRemove }: IColumnProps) => [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
    render: (id: number) => (
      <Space>
        <p>{id}</p>
      </Space>
    ),
  },
  {
    title: "SAA",
    dataIndex: "name",
    key: "name",
    render: (text: string) => (
      <Space>
        <p>{text}</p>
        <ExclamationCircleOutlined />
      </Space>
    ),
  },
  {
    title: "Vəzifə",
    dataIndex: "position",
    key: "position",
  },
  {
    key: "action",
    render: (record: any) => (
      <Space size="middle">
        <button
          className="tableTrashBtn"
          onClick={() => handleRemove(record.id)}
        >
          <i className="fa-solid fa-trash"></i> Sil
        </button>
      </Space>
    ),
  },
];
