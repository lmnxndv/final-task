import { Button } from "antd";
import { Controller } from "react-hook-form";

type DrawerProps = {
  name: string;
  control: any;
  disabled?: boolean;
  onClick?: () => void;
  type?: string;
  error?: any;
};

const DrawerButton = ({
  name,
  onClick,
  control,
  error,
}: DrawerProps) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => {
      return (
        <>
          <Button
            {...field}
            onClick={onClick}
            style={{ width: 300 }}
            type={"primary"}
            danger={error ? true : false}
          />
        </>
      );
    }}
  />
);

export default DrawerButton;
