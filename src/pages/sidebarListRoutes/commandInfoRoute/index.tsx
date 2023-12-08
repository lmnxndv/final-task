import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./style.css";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";
import FourthChild from "./FourthChild";

const CommandInfoRoute = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <h3>Başlıq və əsaslandırma</h3>,
      children: <FirstChild />,
    },
    {
      key: "2",
      label: <h3>Əmr / Sərəncam / Qərar</h3>,
      children: <SecondChild />,
    },
    {
      key: "3",
      label: <h3>Tapşırıq</h3>,
      children: <ThirdChild />,
    },
    {
      key: "4",
      label: <h3>Əsas</h3>,
      children: <FourthChild />,
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default CommandInfoRoute;
