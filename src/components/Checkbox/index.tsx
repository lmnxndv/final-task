import { Checkbox as AntCheckbox } from "antd";
import { Controller } from "react-hook-form";

type ControllerType = {
  name: string;
  onChange: (checked: boolean) => void;
  control: any;
  value: boolean;
};

const Checkbox = ({ name, control, onChange, value }: ControllerType) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <AntCheckbox
            {...field}
            style={{ marginLeft: "20px" }}
            checked={value}
            onChange={(e) => onChange(e.target.checked)}
          >
            Konfidensial
          </AntCheckbox>
        </>
      )}
    />
  );
};

export default Checkbox;
