import { Drawer, Steps, Button} from "antd";
import {ArrowRightOutlined} from '@ant-design/icons'
import React, { useState } from "react";
import "./style.css";
import FirstPage from "../../pages/firstPage";
import SecondPage from "../../pages/secondPage";
import ThirdPage from "../../pages/thirdPage";
import FourthPage from "../../pages/fourthPage";


const SidePanel: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [current, setCurrent] = useState(0);

  const onClose = () => {
    setOpen(false);
  };

  const drawerWidth = 900;

  const showStep = (step: number) => {
    switch (step) {
      case 0:
        return <FirstPage />;
      case 1:
        return <SecondPage />;
      case 2:
        return <ThirdPage />;
      case 3:
        return <FourthPage />;
      default:
        return null;
    }
  };

  return (
    <div className="main-content">
      <Drawer
        placement="right"
        width={drawerWidth}
        onClose={onClose}
        open={open}
        className="drawer"
      >
        <Steps
          current={current}
          onChange={setCurrent}
          items={[
            {
              title: "ƏSAS MƏLUMATLAR",
            },
            {
              title: "ƏMR MƏLUMATLARI",
            },
            {
              title: "ELEKTRON FORMA",
            },
            {
              title: "PAYLANACAQLAR SİYAHISI",
            },
          ]}
        />
        <h1>Əsas fəaliyyət üzrə Əmrlər</h1>

        {showStep(current)}
        <div className="btns">
        <Button type="primary" >İmtina et</Button>
        <Button type="primary" style={{background:"#008000", color:'#fff'}}>Davam et <ArrowRightOutlined /></Button>
        </div>
      </Drawer>
    </div>
  );
};

export default SidePanel;
