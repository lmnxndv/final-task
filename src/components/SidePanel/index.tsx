import React, { useState } from "react";
import { Drawer, Steps, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import FirstPage from "../../pages/firstPage";
import SecondPage from "../../pages/secondPage";
import ThirdPage from "../../pages/thirdPage";
import FourthPage from "../../pages/fourthPage";
import "./style.css";

const SidePanel: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [current, setCurrent] = useState(1);

  const onClose = () => {
    setOpen(false);
  };

  const drawerWidth = 1400;

  const showStep = (step: number) => {
    switch (step) {
      case 1:
        return <FirstPage />;
      case 2:
        return <SecondPage />;
      case 3:
        return <ThirdPage />;
      case 4:
        return <FourthPage />;
      default:
        return null;
    }
  };

  return (
    <form>
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
            <Button type="primary">İmtina et</Button>
            <Button
              type="primary"
              style={{ background: "#008000", color: "#fff" }}
              onClick={() => setCurrent(current + 1)}
            >
              Davam et <ArrowRightOutlined />
            </Button>
          </div>
        </Drawer>
      </div>
    </form>
  );
};

export default SidePanel;
