import { Drawer, Steps } from "antd";
import React, { useState } from "react";
import "./style.css";

const SidePanel: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [current, setCurrent] = useState(0);

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (value: number) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  const description = "This is a description.";
  const drawerWidth = 900;
  return (
    <div>
      <Drawer placement="right" width={drawerWidth}  onClose={onClose} open={open}>
        <Steps
          current={current}
          onChange={onChange}
          items={[
            {
              title: "Step 1",
              description,
            },
            {
              title: "Step 2",
              description,
            },
            {
              title: "Step 3",
              description,
            },
            {
              title: "Step 3",
              description,
            },
            
          ]}
        />
      </Drawer>
    </div>
  );
};

export default SidePanel;
