import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Drawer, Steps, Button } from "antd";
import { mainDataSchema, orderDataSchema } from "../../validation";
import "./style.css";
import { items } from "../../data/data";
import BasicInfo from "../../pages/basicInfo";
import CommandInfo from "../../pages/commandInfo";
import DistributionList from "../../pages/distributionList";
import ElectronicForm from "../../pages/electronicForm";
import { ArrowRightOutlined } from "@ant-design/icons";

const SidePanel: React.FC = () => {
  const methods = useForm({
    resolver: yupResolver(
      yup.object({
        ...mainDataSchema(),
        ...orderDataSchema(),
      })
    ),
  });
  const [open, setOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const onClose = () => {
    setOpen(false);
  };

  const drawerWidth = 1400;

  const showStep = (step: number) => {
    switch (step) {
      case 0:
        return <BasicInfo />;
      case 1:
        return <CommandInfo setCurrentStep={setCurrentStep} />;
      case 2:
        return <ElectronicForm />;
      case 3:
        return <DistributionList />;
      default:
        return null;
    }
  };

  const nextStep = () => {
    const values = methods.getValues();
    console.log("🚀 ~ values:", values);
    // setValue(mainDataName, {
    //   [FirstStepIds.APPOINTMENT]: values?.mainData?.appointment,
    //   [FirstStepIds.CLASSIFICATION]: values?.mainData?.classification,
    //   [FirstStepIds.CONTENT]: values?.mainData?.content
    // });
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="main-content">
      <FormProvider {...methods}>
        <form
          {...methods}
          onSubmit={methods.handleSubmit(() => console.log("a"))}
        >
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
              items={items}
            />
            <h1>Əsas fəaliyyət üzrə Əmrlər</h1>
            {currentStep !== 0 && (
              <div className="page-row">
                <h2>Əsas məlumatlar</h2>
              </div>
            )}
            {showStep(currentStep)}
            <div className="btns">
              <Button type="primary">İmtina et</Button>
              {currentStep === 3 && (
                <Button
                  type="primary"
                  onClick={() => console.log("values", methods.trigger())}
                >
                  Qeydiyyata al
                </Button>
              )}
              {currentStep !== 3 && (
                <Button
                  type="primary"
                  onClick={nextStep}
                  style={{ background: "#008000", color: "#fff" }}
                >
                  Davam et <ArrowRightOutlined />
                </Button>
              )}
            </div>
          </Drawer>
        </form>
      </FormProvider>
    </div>
  );
};

export default SidePanel;
