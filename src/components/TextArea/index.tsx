import { Input } from "antd";
import { Controller } from "react-hook-form";

type ControllerType = {
  name: any;
  control: any;
  disabled?: boolean;
  rows?: number;
  // onChange: (value?: any) => void;
  value?: any;
  error?: any;
};

const TextArea = ({
  name,
  disabled,
  rows,
  // onChange,
  control,
  value,
  error,
}: ControllerType) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <>
        <Input.TextArea
          {...field}
          rows={rows}
          // onChange={(e) => onChange(e.target.value)}
          style={{ width: 300 }}
          disabled={disabled}
          value={value}
          status={error && "error"}
        />
      </>
    )}
  />
);

export default TextArea;
