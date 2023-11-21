import { Input as InputAnt } from "antd";
import { Controller } from "react-hook-form";

type ControllerType = {
  name: any;
  control: any;
  value?: any;
  placeholder?: string;
  onChange: (value: any) => void;
  error?: any;
};

const Input = ({
  name,
  control,
  value,
  onChange,
  error,
  placeholder,
}: ControllerType) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <>
        <InputAnt
          {...field}
          placeholder={placeholder}
          style={{ width: 300 }}
          onChange={(e) =>
            onChange(e.target.value)}
          value={value}
          status={error && "error"}
        />
      </>
    )}
  />
);

export default Input;
