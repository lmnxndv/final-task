import { Select } from "antd";
import { Controller } from "react-hook-form";
import { OptionsSection } from "../../data/data";
import "./style.css";

type ControllerType = {
  item: OptionsSection;
  icon?: any;
  name: any;
  disabled?: boolean;
  control: any;
  value?: any;
  error?: any;
};

const Dropdown = ({
  name,
  item,
  icon,
  disabled,
  control,
  value,
  error,
}: ControllerType) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <>
        <Select
          {...field}
          key={item.id}
          style={{ width: 300 }}
          disabled={disabled}
          value={value}
          options={item.options}
          suffixIcon={icon}
          status={error && "error"}
        />
      </>
    )}
  />
);

export default Dropdown;
