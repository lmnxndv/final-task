import { useState } from "react";
import { Form, Input } from "antd";
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
};

const ControllerA = ({
  name,
  label,
  item,
  icon,
  control,
  value,
}: ControllerType) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (value: { value: any; label: React.ReactNode }) => {
    console.log(value);
  };
  return (
    <Form.Item
      label={label}
      hasFeedback
      // validateStatus={errors[name] ? 'error' : ''}
      // help={errors[name]?.message}
    >
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
              onChange={handleChange}
              options={item.options}
              suffixIcon={icon}
            />
            {/* <Input {...field} /> */}
            {item.id === FirstStepIds.NOMENCLATURE && (
              <Checkbox
                {...field}
                style={{ marginLeft: "20px" }}
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            )}
          </>
        )}
      />
    </Form.Item>
  );
};

export default ControllerA;

// <Form.Item key={item.id} label={item.title}>
//   <Controller
//     control={control}
//     name={item.id}
//     render={({ field }) => (
//       <>
//         <Select
//           {...field}
//           id={item.id}
//           style={{ width: 300 }}
//           disabled={item.id === FirstStepIds.NOMENCLATURE}
//           value={value}
//           suffixIcon={icon}
//           options={item.options}
//         ></Select>
//         {item.id === FirstStepIds.NOMENCLATURE && (
//           <Checkbox
//             {...field}
//             style={{ marginLeft: "20px" }}
//             checked={checked}
//             onChange={(e) => setChecked(e.target.checked)}
//           />
//         )}
//       </>
//     )}
//   />
// </Form.Item>
