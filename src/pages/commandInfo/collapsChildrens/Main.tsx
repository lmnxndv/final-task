import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";

const Main = () => {
  return (
    <div>
      <div className="esas-row">
        <h4>Mətn</h4>
        <TextArea rows={4} />
        <div className="addTextBtn">
          <Button
            type="primary"
            style={{ background: "#008000", color: "#fff", width: 100 }}
          >
            Əlavə et
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
