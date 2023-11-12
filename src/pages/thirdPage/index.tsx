import { Button, Upload, UploadProps, message } from "antd";
import {
  PlusOutlined,
  FileZipOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import "./style.css";

const ThirdPage = () => {
  const props: UploadProps = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className="thirdPage-container">
      <div className="page-row">
        <h2>Əsas məlumatlar</h2>
      </div>
      <div className="page-row">
        <h2>Elektron forma</h2>
        <div className="file-row">
          <Upload {...props}>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              style={{ marginRight: 15 }}
            >
              Faylı seç
            </Button>
            <Button
              type="primary"
              icon={<FileZipOutlined />}
              style={{ marginRight: 15 }}
            >
              Skan et
            </Button>
          </Upload>
          <p>faylı bu sahəyə daşıyın(maksimum-500)</p>
        </div>
        <p>
          <WarningOutlined /> Maksimum fayl sayı: 500
        </p>
      </div>
    </div>
  );
};

export default ThirdPage;
