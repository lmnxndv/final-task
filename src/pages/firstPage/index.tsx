import { Form, Select, Checkbox } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import "./style.css";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const FirstPage = () => {
  return (
    <div className="firstPage-container">
      <div className="firstPage-row">
        <h2>Əsas məlumatlar</h2>
        <Form>
          <Form.Item label="Təyinat">
            <Select
              id="Təyinat"
              style={{ width: 300 }}
              suffixIcon={<CaretDownOutlined />}
              onChange={handleChange}
              options={[
                {
                  options: [
                    { label: "Ümümi", value: "Ümümi" },
                    { label: "Apellasiya şurası", value: "Apellasiya şurası" },
                    {
                      label: "Təhlükəsizlik şurası",
                      value: "Təhlükəsizlik şurası",
                    },
                  ],
                },
              ]}
            ></Select>
          </Form.Item>
          <Form.Item label="Təsnifat">
            <Select
              id="Təsnifat"
              style={{ width: 300 }}
              suffixIcon={<CaretDownOutlined />}
              onChange={handleChange}
              options={[
                {
                  options: [
                    { label: "Digər", value: "Digər" },
                    { label: "Göstəriş məktubu", value: "Göstəriş məktubu" },
                    {
                      label: "Metodiki tövsiyyə",
                      value: "Metodiki tövsiyyə",
                    },
                  ],
                },
              ]}
            ></Select>
          </Form.Item>
          <Form.Item label="Nomenklatur">
            <Select
              id="Təsnifat"
              style={{ width: 300 }}
              suffixIcon={<CaretDownOutlined />}
              disabled
              options={[
                {
                  options: [
                    { label: "12.1", value: "Digər" },
                    { label: "12.2", value: "Göstəriş məktubu" },
                    {
                      label: "12.3",
                      value: "Metodiki tövsiyyə",
                    },
                  ],
                },
              ]}
            ></Select>
            <Checkbox onChange={onChange}>Konfidensial</Checkbox>
          </Form.Item>
          <Form.Item label="Mezmun">
            <Select
              id="Mezmun"
              style={{ width: 300 }}
              suffixIcon={<CaretDownOutlined />}
              onChange={handleChange}
              options={[
                {
                  options: [
                    { label: "Test-1", value: "test-1" },
                    { label: "Test-2", value: "test-2" },
                    {
                      label: "Test-3",
                      value: "test-3",
                    },
                  ],
                },
              ]}
            ></Select>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FirstPage;
