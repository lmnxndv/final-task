import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import Basliq from "./collapsChildrens/Basliq";
import Emr from "./collapsChildrens/Emr";
import Tapsiriq from "./collapsChildrens/Tapsiriq";
import Esas from "./collapsChildrens/Esas";
import './style.css'

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Başlıq və əsaslandırma",
    children: <Basliq/>,
  },
  {
    key: "2",
    label: "Əmr / Sərəncam / Qərar",
    children: <Emr/>,
  },
  {
    key: "3",
    label: "Tapşırıq",
    children: <Tapsiriq/>,
  },
  {
    key: "4",
    label: " Əsas",
    children: <Esas/>,
  },
];
const SecondPage = () => {
  return (
    <div className="secondPage">
      <div className="page-row">
        <h2>Əsas məlumatlar</h2>
      </div>
      <div className="page-row">
        <Collapse ghost items={items} />
      </div>
    </div>
  );
};

export default SecondPage;
