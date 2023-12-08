import { useFormContext } from "react-hook-form";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import Title from "./collapsChildrens/Title";
import Command from "./collapsChildrens/Command";
import Task from "./collapsChildrens/Task";
import Main from "./collapsChildrens/Main";
import "./style.css";

const CommandInfo = () => {
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
  return (
    <div className="secondPage">
      <form {...methods}>
        <div className="page-row">
          <Collapse ghost items={items} />
        </div>
      </form>
    </div>
  );
};

export default CommandInfo;
