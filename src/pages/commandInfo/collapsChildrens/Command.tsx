import React, { useState } from "react";
import { Button, Table } from "antd";
import TextArea from "antd/es/input/TextArea";

interface DataItem {
  key: number;
  no: number;
  band: string;
}

const Command: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");

  const columns: any[] = [
    {
      title: "№",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Bənd",
      dataIndex: "bənd",
      key: "bənd",
    },
  ];
  return (
    <div>
      <div className="emr-first-row">
        <h4>Bəndin mətni</h4>
        <TextArea
          rows={4}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <div className="addTextBtn">
        <Button
          type="primary"
          style={{ background: "#008000", color: "#fff", width: 100 }}
        >
          Əlavə et
        </Button>
      </div>
      <div className="emr-second-row">
        {inputText === "" && <h4>Bəndlər</h4>}
        <Table<DataItem> columns={columns} />
      </div>
    </div>
  );
};

export default Command;
