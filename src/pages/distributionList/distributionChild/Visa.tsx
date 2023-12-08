import { useState } from "react";
import { Button, Drawer, Table } from "antd";
import { distributionUserList } from "../../../data/data";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Columns } from "./data";

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

  const handleAddToList = (userId: number) => {
    const employee = distributionUserList.find(
      (employee) => employee.id === userId
    );
    if (!employee) return;
    visaEmployees.append(employee);
    onClose();
  };

  const handleRemove = (userId: number) => {
    const employeeIndex = distributionUserList.findIndex(
      (employee) => employee.id !== userId
    );
    visaEmployees.remove(employeeIndex);
  };
  const columns = Columns({ handleRemove });

  return (
    <form {...methods}>
      <div className="page-row-content">
        <div className="visa-row">
          <div>
            <h2>Vizaya vermə</h2>
            <Button
              type="primary"
              onClick={showDrawer}
              style={{
                marginBottom: 10,
              }}
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
                {(formErrors?.distributionList?.visaEmployees as any)?.message}
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
  );
};

export default Visa;
