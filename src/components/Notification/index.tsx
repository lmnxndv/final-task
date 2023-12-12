import React, { useMemo, useEffect } from "react";
import { Button, Divider, notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

interface NotificatonProps {
  showNotification: boolean;
  closeDrawer: () => void;
}

const Context = React.createContext({ name: "Default" });

const Notification: React.FC<NotificatonProps> = ({
  showNotification,
  closeDrawer,
}) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: (
        <div className="messageTitle">
          <span style={{ color: "#fff" }}>
            2317140102009700 sənədi qeydiyyata alınıb. *Əmr/Sərəncam/Qərar
            hazırlanması” tapşırığı yaradılıb.
          </span>
        </div>
      ),
      description: (
        <div className="taskBtn">
          <Link to="/docCard">
            <Button
              type="primary"
              style={{ color: "#fff" }}
              onClick={closeDrawer}
            >
              Tapşırığı aç
            </Button>
          </Link>
        </div>
      ),
      icon: <CheckCircleOutlined style={{ color: "green" }} />,
      style: { backgroundColor: "#36454F", borderRadius: "8px" },
      placement,
    });
  };

  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  useEffect(() => {
    if (!showNotification) return;
    openNotification("topRight");
  }, [showNotification]);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Divider />
    </Context.Provider>
  );
};

export default Notification;
