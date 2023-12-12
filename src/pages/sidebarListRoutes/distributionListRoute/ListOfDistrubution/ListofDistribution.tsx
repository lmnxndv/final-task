import OtherStructure from "./OtherStructure";
import ToSign from "./ToSign";
import ToVisa from "./ToVisa";


const ListofDistribution = () => {
  return (
    <div className="command-info-container">
      <ToSign/>
      <ToVisa/>
      <OtherStructure/>
    </div>
  );
};

export default ListofDistribution;
