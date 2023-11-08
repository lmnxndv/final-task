import { useState } from "react";
import { Form } from "antd";
import { Checkbox, Select } from "antd";
import { Controller } from "react-hook-form";
import { FirstStepIds, OptionsSection } from "../../data/data";
import "./style.css";

type ControllerType = {
  item: OptionsSection;
  icon?: any;
  control: any;
  value?: any;
};

const ControllerA = ({ item, icon, control, value }: ControllerType) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <Form.Item key={item.id} label={item.title}>
        <Controller
          control={control}
          name={item.id}
          render={({ field: { onChange } }) => (
            <>
              <Select
                id={item.id}
                style={{ width: 300 }}
                disabled={item.id === FirstStepIds.NOMENCLATURE}
                value={value}
                suffixIcon={icon}
                onChange={onChange}
                options={item.options}
              ></Select>
              {item.id === FirstStepIds.NOMENCLATURE && (
                <Checkbox
                  style={{ marginLeft: "20px" }}
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
              )}
            </>
          )}
        />
      </Form.Item>
    </>
  );
};

export default ControllerA;
