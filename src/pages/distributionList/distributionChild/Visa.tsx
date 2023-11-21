import { useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Drawer, Space, Table } from "antd";
import { distributionUserList } from "../../../data/data";
import {
  addToListVisa,
  removeFromListVisa,
} from "../../../redux/distributionSlice";
import { UseAppDispatch, useAppSelector } from "../../../hook/hook";

const Visa = () => {
  const dispatch = UseAppDispatch();
  const users = useAppSelector(
    (state) => state.distribution.distributionItemsForVisa
  );
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleAddToListVisa = (userId: number) => {
    const user = distributionUserList.find((user) => user.id === userId);
    if (user) {
      dispatch(addToListVisa(user));
    }
    onClose();
  };
  const handleRemove = (userId: number) => {
    dispatch(removeFromListVisa(userId));
  };
  const columns = [
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
  return (
    <div>
      <div className="page-row-content">
        <div className="visa-row">
          <div>
            <h2>Vizaya vermə</h2>
            <Button
              type="primary"
              onClick={showDrawer}
              style={{ marginBottom: 10 }}
            >
              <i className="fa-solid fa-user-plus"></i> Əlavə et
            </Button>
            {users.length !== 0 && (
              <div className="table-row">
                <Table
                  dataSource={users}
                  columns={columns}
                  pagination={false}
                  rowKey="id"
                />
              </div>
            )}

            <Drawer
              title="Vizaya vermə"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <div className="users-list">
                {distributionUserList.map((user) => (
                  <div
                    className="drawer-users"
                    key={user.id}
                    onClick={() => handleAddToListVisa(user.id)}
                  >
                    <p>
                      {user.id}. {user.name}
                    </p>
                  </div>
                ))}
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visa;
