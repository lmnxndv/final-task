import { CheckOutlined, DeleteOutlined, SendOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Main from "../Main";

const Header = () => {
  return (
    <div className="sidebar-header">
      <div className="header-nav">
        <div className="header-title">
          <h3>Əmr / Sərəncam / Qərar hazırlanması</h3>
        </div>
        <div className="header-btns">
          <Button style={{ background: "green", border: "1px green solid" }}>
            <CheckOutlined />
            Vizaya göndər
          </Button>
          <Button>
            <SendOutlined />
            Digər strukturla razılaşdırma
          </Button>
          <Button style={{ border: "1px solid red", color: "#FF2E2E" }}>
            <DeleteOutlined />
            Sil
          </Button>
        </div>
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
};

export default Header;
