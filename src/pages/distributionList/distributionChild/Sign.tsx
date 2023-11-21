import { CloseOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { distributionUserList } from "../../../data/data";
import {
  addToListSign,
  removeFromListSign,
} from "../../../redux/distributionSlice";
import { UseAppDispatch, useAppSelector } from "../../../hook/hook";
import { useState } from "react";

const Sign = () => {
  const dispatch = UseAppDispatch();
  const signer = useAppSelector(
    (state) => state.distribution.distributionItemsForSign
  );
  const [openSignSidePanel, setOpenSignSidePanel] = useState(false);

  const showDrawer = () => {
    setOpenSignSidePanel(true);
  };

  const onClose = () => {
    setOpenSignSidePanel(false);
  };

  const handleAddToList = (signerId: number) => {
    const user = distributionUserList.find((user) => user.id === signerId);
    if (user) {
      dispatch(addToListSign(user));
    }
    onClose();
  };
  const handleRemove = () => {
    dispatch(removeFromListSign());
  };

  return (
    <div>
      <div className="page-row-content">
        <h1>Paylanacaqlar siyahısı</h1>
        <div className="to-sign">
          <div>
            <h2>İmzalamaya vermə</h2>
            {!signer ? (
              <Button type="primary" onClick={showDrawer}>
                <i className="fa-solid fa-user-plus"></i> Əlavə et
              </Button>
            ) : (
              <div className="addList-row">
                <div>
                  <p>SAA</p>
                  <span>
                    {signer.name} <ExclamationCircleOutlined />
                  </span>
                  <Button type="primary">Qeyd əlavə et</Button>
                </div>
                <div>
                  <p>Vəzifə</p>
                  <span>{signer.position}</span>
                </div>
                <button className="removeFromList" onClick={handleRemove}>
                  <CloseOutlined />
                </button>
              </div>
            )}

            <Drawer
              title="İmzalamaya vermə"
              placement="right"
              onClose={onClose}
              open={openSignSidePanel}
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

export default Sign;
