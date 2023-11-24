import Visa from "./distributionChild/Visa";
import Structure from "./distributionChild/Structure";
import "./style.css";
import Sign from "./distributionChild/Sign";

const DistributionList: React.FC = () => {
  return (
    <div className="distributionList">
      <div className="page-row-content">
        <Sign />
      </div>
      <div className="page-row-content">
        <Visa />
      </div>
      <div className="page-row-content">
        <Structure />
      </div>
    </div>
  );
};

export default DistributionList;
