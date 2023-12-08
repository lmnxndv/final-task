import { Route, Routes } from "react-router";
import "./App.css";
import SidePanel from "./components/SidePanel";
import RegisterCard from "./pages/RegisterCard";
function App() {
  return (
    <>
      <SidePanel />
      <Routes>
        <Route path="*" element={<RegisterCard />} />
      </Routes>
    </>
  );
}

export default App;
