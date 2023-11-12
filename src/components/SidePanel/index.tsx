import React, { useState } from "react";
// import { UseAppDispatch } from "../../hook/hook";
import { Drawer, Steps, Button } from "antd";
// import { ArrowRightOutlined } from "@ant-design/icons";
import FirstPage from "../../pages/firstPage";
import SecondPage from "../../pages/secondPage";
import ThirdPage from "../../pages/thirdPage";
import FourthPage from "../../pages/fourthPage";
import "./style.css";
// import { setValue } from "../../redux/formSlice";
// import { FirstStepIds } from "../../data/data";

const SidePanel: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const onClose = () => {
    setOpen(false);
  };

  const drawerWidth = 1400;

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

  // const handleCloseClick = () => {
  //   setOpen(false);
  // };

  // const handleRegisterClick = () => {
  //   dispatch(setValue({ id: FirstStepIds.APPOINTMENT, value: "yourvalue" }));
  //   setCurrentStep(currentStep + 1);
  // };

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
            current={currentStep}
            onChange={setCurrentStep}
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

          {showStep(currentStep)}
            {currentStep === 3 && <Button type="primary">Qeydiyyata al</Button>}
        </Drawer>
      </div>
    </form>
  );
};

export default SidePanel;
