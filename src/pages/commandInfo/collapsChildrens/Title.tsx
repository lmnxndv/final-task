import { Button } from "antd";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import TextArea from "../../../components/TextArea";
import Input from "../../../components/Input";

const Title = () => {
  const methods = useFormContext();
  const {
    setValue,
    control,
    handleSubmit,
    formState: { errors: formErrors },
  } = methods;
  const [title, setTitle] = useState({
    content: "",
    preambula: "",
  });

  console.log("values", methods.getValues());
  console.log("text", title);

  const handleChangeText = (text: any) => {
    setTitle((prev) => ({ ...prev, preambula: text }));
  };
  const handleChangeContent = (value: any) => {
    setTitle((prev) => ({ ...prev, content: value }));
  };

  const handleAddTitle = () => {
    setValue("orderData.title", title);
    console.log("values", methods.getValues("orderData"));
  };

  const test = () => {
    console.log("test", formErrors);
  };
  return (
    <div className="title">
      <form {...methods} onSubmit={test}>
        <div className="first-input-row">
          <h4>Əmrin məzmunu</h4>
          <Input
            name="orderData.title.content"
            placeholder="Basic usage"
            value={
              title.content || methods.getValues("orderData.title.content")
            }
            control={control}
            onChange={handleChangeContent}
          />
        </div>
        <div className="first-input-row">
          <h4>Preambula</h4>
          <TextArea
            name="orderData.title.preambula"
            control={control}
            rows={4}
            value={
              title.preambula || methods.getValues("orderData.title.preambula")
            }
            onChange={handleChangeText}
          />
          {formErrors?.orderData?.title.content}
        </div>
        <div className="addTextBtn">
          <Button
            onClick={handleAddTitle}
            type="primary"
            style={{ background: "#008000", color: "#fff", width: 100 }}
          >
            Əlavə et
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Title;
