import { useState, useCallback } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Drawer, Space, Table } from "antd";
import { distributionUserList } from "../../../data/data";

const Visa = () => {
  const methods = useFormContext();
  const {
    control,
    formState: { errors: formErrors },
  } = methods;

  const visaEmployees = useFieldArray({
    control: control,
    name: "distributionList.visaEmployees",
  });

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleAddToListVisa = useCallback(
    (userId: number) => {
      const visaEmployee = distributionUserList.find(
        (employee) => employee.id === userId
      );
      if (!visaEmployee) return;
      visaEmployees.append(visaEmployee);

      onClose();
    },
    [visaEmployees]
  );
  const handleRemove = (userId: number) => {
    const employeeIndex = distributionUserList.findIndex(
      (user) => user.id === userId
    );
    visaEmployees.remove(employeeIndex);
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
      <form {...methods}>
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
              {visaEmployees.fields.length !== 0 && (
                <div className="table-row">
                  <Table
                    dataSource={visaEmployees.fields}
                    columns={columns}
                    pagination={false}
                    rowKey="id"
                  />
                </div>
              )}
              {formErrors?.distributionList?.visaEmployees && (
                <p className="err">
                  {
                    (formErrors?.distributionList?.visaEmployees as any)
                      ?.message
                  }
                </p>
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
      </form>
    </div>
  );
};

export default Visa;
