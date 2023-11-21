import { useFormContext } from "react-hook-form";
import type { CollapseProps } from "antd";
import { Button, Collapse } from "antd";
import Title from "./collapsChildrens/Title";
import Command from "./collapsChildrens/Command";
import Task from "./collapsChildrens/Task";
import Main from "./collapsChildrens/Main";
import "./style.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import { ISteps } from "../../types/type";

const CommandInfo = ({ setCurrentStep }: ISteps) => {
  const methods = useFormContext();
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Başlıq və əsaslandırma",
      children: <Title />,
    },
    {
      key: "2",
      label: "Əmr / Sərəncam / Qərar",
      children: <Command />,
    },
    {
      key: "3",
      label: "Tapşırıq",
      children: <Task />,
    },
    {
      key: "4",
      label: " Əsas",
      children: <Main />,
    },
  ];

  const nextStep = () => {
    setCurrentStep(2);
  };
  return (
    <div className="secondPage">
      <form {...methods}>
        <div className="page-row">
          <Collapse ghost items={items} />
        </div>
        <div className="btns">
          <Button type="primary">İmtina et</Button>
          <Button
            type="primary"
            onClick={nextStep}
            style={{ background: "#008000", color: "#fff" }}
          >
            Davam et <ArrowRightOutlined />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CommandInfo;
