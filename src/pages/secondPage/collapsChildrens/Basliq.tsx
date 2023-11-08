import { Button, Input } from "antd";
import { useState } from "react";

const { TextArea } = Input;

const Basliq = () => {
  const [text, setText] = useState<string>("");

  const handleAddTo = () => {
    const inputField = document.getElementById(
      "inputField"
    ) as HTMLInputElement;
    if (inputField) {
      inputField.value = text;
    }
  };

  return (
    <div className="basliq">
      <div className="first-input-row">
        <h4>Əmrin məzmunu</h4>
        <Input id="inputField" placeholder="Basic usage" />
      </div>
      <div className="first-input-row">
        <h4>Preambula</h4>
        <TextArea
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="addTextBtn">
        <Button
          onClick={handleAddTo}
          type="primary"
          style={{ background: "#008000", color: "#fff", width: 100 }}
        >
          Əlavə et
        </Button>
      </div>
    </div>
  );
};

export default Basliq;
