import Header from "./Header";
import SideBar from "./SideBar";
import "./style.css"

const RegisterCard = () => {
  return (
    <div className="registerDashboard">
      <SideBar />
      <div className="register-main">
        <Header />
      </div>
    </div>
  );
};

export default RegisterCard;
