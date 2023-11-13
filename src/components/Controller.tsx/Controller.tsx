import { useState } from "react";
import { Form } from "antd";
import { Checkbox, Select } from "antd";
import { Controller } from "react-hook-form";
import { FirstStepIds, OptionsSection } from "../../data/data";
import "./style.css";

type ControllerType = {
  item: OptionsSection;
  icon?: any;
  name: any;
  label: string;
  control: any;
  value?: any;
  error?: any
};

const ControllerA = ({
  name,
  label,
  item,
  icon,
  control,
  value,
  error
}: ControllerType) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Form.Item label={label} hasFeedback>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <Select
              {...field}
              key={item.id}
              style={{ width: 300 }}
              disabled={item.id === FirstStepIds.NOMENCLATURE}
              value={value}
              options={item.options}
              suffixIcon={icon}
              status={error && 'error'}
            />
            {item.id === FirstStepIds.NOMENCLATURE && (
              <Checkbox
                {...field}
                style={{ marginLeft: "20px" }}
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              >
                Konfidensial
              </Checkbox>
            )}
          </>
        )}
      />
    </Form.Item>
  );
};

export default ControllerA;
