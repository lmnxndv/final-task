import { CloseOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useFormContext } from "react-hook-form";
import { Button, Drawer } from "antd";
import { distributionUserList } from "../../../data/data";
import { useState } from "react";

const Sign = () => {
  const methods = useFormContext();
  const {
    watch,
    setValue,
    formState: { errors: formErrors },
  } = methods;
  const [openSignSidePanel, setOpenSignSidePanel] = useState(false);

  const signWatcher = watch("distributionList.signer");

  const showDrawer = () => {
    setOpenSignSidePanel(true);
  };

  const onClose = () => {
    setOpenSignSidePanel(false);
  };
  console.log("values", methods.getValues());

  const handleAddToList = (signerId: number) => {
    const user = distributionUserList.find((user) => user.id === signerId);
    if (!user) return;
    setValue("distributionList.signer", user);
    onClose();
  };
  const handleRemove = () => {
    setValue("distributionList.signer", null);
  };

  return (
    <div>
      <form {...methods}>
        <div className="page-row-content">
          <h1>Paylanacaqlar siyahısı</h1>
          <div className="to-sign">
            <div>
              <h2>İmzalamaya vermə</h2>
              {!signWatcher ? (
                <Button type="primary" onClick={showDrawer}>
                  <i className="fa-solid fa-user-plus"></i> Əlavə et
                </Button>
              ) : (
                <div className="addList-row">
                  <div>
                    <p>SAA</p>
                    <span>
                      {signWatcher.name} <ExclamationCircleOutlined />
                    </span>
                    <Button type="primary">Qeyd əlavə et</Button>
                  </div>
                  <div>
                    <p>Vəzifə</p>
                    <span>{signWatcher.position}</span>
                  </div>
                  <button className="removeFromList" onClick={handleRemove}>
                    <CloseOutlined />
                  </button>
                </div>
              )}
              {formErrors?.distributionList?.signer && (
                <p className="err">
                  {formErrors?.distributionList?.signer?.name?.message}
                </p>
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
      </form>
    </div>
  );
};

export default Sign;
