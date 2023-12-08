import { Route, Routes } from "react-router";
import ElectronicFormRoute from "../../sidebarListRoutes/electronicFormRoute";
import DistributionListRoute from "../../sidebarListRoutes/distributionListRoute";
import History from "../../sidebarListRoutes/history";
import MainInfoRoute from "../../sidebarListRoutes/mainInfoRoute";
import CommandInfoRoute from "../../sidebarListRoutes/commandInfoRoute";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/mainInfo" element={<MainInfoRoute />} />
        <Route path="/commandInfo" element={<CommandInfoRoute />} />
        <Route path="/electronicForm" element={<ElectronicFormRoute />} />
        <Route path="/distributionList" element={<DistributionListRoute />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
};

export default Main;