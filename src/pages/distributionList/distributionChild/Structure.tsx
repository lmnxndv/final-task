import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Drawer, Space, Table } from "antd";
import { distributionUserList } from "../../../data/data";
import { addToListOtherOrgUnits, removeFromListOrgUnits } from "../../../redux/distributionSlice";
import { UseAppDispatch, useAppSelector } from "../../../hook/hook";
import { useState } from "react";
import { Columns } from "./data";

const Structure = () => {
  const dispatch = UseAppDispatch();
  const users = useAppSelector((state) => state.distribution.distributionItemsForOtherOrgUnits);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleAddToList = (userId: number) => {
    const user = distributionUserList.find((user) => user.id === userId);
    if (user) {
      dispatch(addToListOtherOrgUnits(user));
    }
    onClose();
  };
  const handleRemove = (userId: number) => {
    dispatch(removeFromListOrgUnits(userId));
  };
  const columns = Columns({ handleRemove });

  return (
    <div>
      <div className="page-row-content">
        <div className="structure-row">
          <div>
            <h2>Digər strukturlarla razılaşma</h2>
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
              title="Digər strukturlarla razılaşma"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <div className="users-list">
                {distributionUserList.map((user) => (
                  <div
                    className="drawer-users"
                    key={user.id}
                    onClick={() => handleAddToList(user.id)}
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

export default Structure;
