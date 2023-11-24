import { Input as InputAnt } from "antd";
import { Controller } from "react-hook-form";

type ControllerType = {
  name: any;
  control: any;
  value?: any;
  placeholder?: string;
  onChange?: (value: any) => void;
  error?: any;
};

const Input = ({
  name,
  control,
  onChange,
  error,
  placeholder,
}: ControllerType) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => {
      const handleChange = (event: any) => {
        if (typeof onChange === "function") {
          const temp: any = onChange(event);
          if (typeof temp === "string") {
            event = temp;
          }
        }
        field.onChange(event);
      };
      return (
        <>
          <InputAnt
            {...field}
            placeholder={placeholder}
            style={{ width: 300 }}
            onChange={handleChange}
            status={error && "error"}
          />
        </>
      );
    }}
  />
);

export default Input;
