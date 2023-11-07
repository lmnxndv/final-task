import { Form, Select, Checkbox } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import "./style.css";
import optionsData from "../../data/data";

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
          {optionsData.sections.map((item) => (
            <Form.Item key={item.id} label={item.title}>
              <Select
                id={item.title}
                style={{ width: 300 }}
                suffixIcon={<CaretDownOutlined />}
                onChange={handleChange}
                options={item.options.map((option) => ({
                  label: option.label,
                  value: option.value,
                }))}
              ></Select>
            </Form.Item>
          ))}
        </Form>
      </div>
    </div>
  );
};

export default FirstPage;
