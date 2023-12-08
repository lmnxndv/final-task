import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { isEmpty } from "lodash";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Drawer, Steps, Button } from "antd";
import {
  mainDataSchema,
  orderDataSchema,
  distributorSchema,
} from "../../validation";
import "./style.css";
import { items } from "../../data/data";
import BasicInfo from "../../pages/basicInfo";
import CommandInfo from "../../pages/commandInfo";
import DistributionList from "../../pages/distributionList";
import ElectronicForm from "../../pages/electronicForm";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { UseAppDispatch, useAppSelector } from "../../hook/hook";
import MainInformation from "../MainInformation";
import { setMainData } from "../../redux/mainInfoSlice";
import { setTaskCard } from "../../redux/taskCardSlice";
import Notification from "../Notification";

const SidePanel: React.FC = () => {
  const methods = useForm({
    resolver: yupResolver(
      yup.object({
        ...mainDataSchema(),
        ...orderDataSchema(),
        ...distributorSchema(),
      })
    ),
  });
  const [open, setOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [registerBtnClicked, setRegisterBtnClicked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = UseAppDispatch();
  const select = useAppSelector((state) => state.taskCard.data);

  console.log("select", select);

  const register = async () => {
    await methods.trigger();

    setRegisterBtnClicked(true);
  };

  useEffect(() => {
    console.log("errors", methods.formState.errors);
    if (!isEmpty(methods.formState.errors) || !registerBtnClicked) return;
    const values = methods.getValues();
    dispatch(setTaskCard(values));
    setShowNotification(true);
  }, [registerBtnClicked]);

  const closeDrawer = () => {
    setOpen(false);
  };

  const drawerWidth = 1400;

  const showStep = (step: number) => {
    switch (step) {
      case 0:
        return <BasicInfo />;
      case 1:
        return <CommandInfo />;
      case 2:
        return <ElectronicForm />;
      case 3:
        return <DistributionList />;
      default:
        return null;
    }
  };

  const nextStep = (step: number) => {
    const values = methods.getValues();
    if (values?.mainData) dispatch(setMainData(values?.mainData));
    setRegisterBtnClicked(false);
    setCurrentStep(step);
  };

  const backStep = () => {
    setRegisterBtnClicked(false);
    setCurrentStep(currentStep - 1);
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
            onClose={closeDrawer}
            open={open}
            className="drawer"
          >
            <Steps
              current={currentStep}
              onChange={(step) => nextStep(step)}
              items={items}
            />
            <h1>Əsas fəaliyyət üzrə Əmrlər</h1>

            {currentStep !== 0 && <MainInformation />}
            {showStep(currentStep)}
            <div className="btns">
              {currentStep !== 0 && (
                <Button
                  type="primary"
                  onClick={backStep}
                  icon={<ArrowLeftOutlined />}
                >
                  Geri
                </Button>
              )}
              <Button type="primary">İmtina et</Button>
              {currentStep === 3 && (
                <>
                  <Button type="primary" onClick={register}>
                    Qeydiyyata al
                  </Button>
                </>
              )}
              {showNotification && (
                <Notification showNotification={showNotification} closeDrawer={closeDrawer}/>
              )}
              {currentStep !== 3 && (
                <Button
                  type="primary"
                  onClick={() => nextStep(currentStep + 1)}
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
