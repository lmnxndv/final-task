import { Tabs } from "antd";
import type { TabsProps } from "antd";
import ForInformation from "./ForInformation";
import ListofDistribution from "./ListOfDistrubution/ListofDistribution";

const DistributionListRoute = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <h3>Paylanacaqlar siyahısı</h3>,
      children: <ListofDistribution />,
    },
    {
      key: "2",
      label: <h3>Məlumat üçün vermə</h3>,
      children: <ForInformation />,
    },
  ];
  return (
    <div>
      <div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default DistributionListRoute;
