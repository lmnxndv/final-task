import { useState } from "react";
import { Button, Drawer, Table } from "antd";
import { distributionUserList } from "../../../data/data";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Columns } from "./data";

const Structure = () => {
  const methods = useFormContext();
  const {
    control,
    formState: { errors: formErrors },
  } = methods;

  const structureEmployees = useFieldArray({
    control: control,
    name: "distributionList.anotherUnitEmployees",
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
    structureEmployees.append(employee);
    onClose();
  };

  const handleRemove = (userId: number) => {
    const employeeIndex = distributionUserList.findIndex(
      (employee) => employee.id !== userId
    );
    structureEmployees.remove(employeeIndex);
  };
  const columns = Columns({ handleRemove });

  return (
    <form {...methods}>
      <div className="page-row-content">
        <div className="structure-row">
          <div>
            <h2>Digər strukturlarla razılaşma</h2>
            <Button
              type="primary"
              onClick={showDrawer}
              style={{
                marginBottom: 10,
              }}
            >
              <i className="fa-solid fa-user-plus"></i> Əlavə et
            </Button>
            {structureEmployees.fields.length !== 0 && (
              <div className="table-row">
                <Table
                  dataSource={structureEmployees.fields}
                  columns={columns}
                  pagination={false}
                  rowKey="id"
                />
              </div>
            )}
              {formErrors?.distributionList?.anotherUnitEmployees && (
                <p className="err">
                  {
                    (formErrors?.distributionList?.anotherUnitEmployees as any)
                      ?.message
                  }
                </p>
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
    </form>
  );
};

export default Structure;
