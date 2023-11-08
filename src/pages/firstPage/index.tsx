import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Form } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import {
  FirstStepIds,
  appointmentData,
  classificationData,
  contentData,
  nomenclatureData,
} from "../../data/data";
import ControllerA from "../../components/Controller.tsx/Controller";
import "./style.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { mainDataSchema } from "../../validation";

const FirstPage = () => {
  const {
    handleSubmit,
    trigger,
    control,
    getValues,
    watch,
    formState: { errors: formErrors },
  } = useForm({
    resolver: yupResolver(mainDataSchema),
  });

  const onSubmit = (data: any) => console.log(data);
  const test = () => {
    console.log("salam");
    trigger();
    console.log("errors", formErrors);

    console.log("submit", getValues());
  };

  return (
    <div className="firstPage-container">
      <Form onFinish={handleSubmit(onSubmit)}>
        <div className="firstPage-row">
          <h2>Əsas məlumatlar</h2>
          <ControllerA
            name={appointmentData.id}
            label={appointmentData.title}
            control={control}
            item={appointmentData}
            icon={<CaretDownOutlined />}
          />
          <ControllerA
            name={classificationData.id}
            label={classificationData.title}
            control={control}
            item={classificationData}
            icon={<CaretDownOutlined />}
          />
          <ControllerA
            name={nomenclatureData.id}
            label={nomenclatureData.title}
            control={control}
            item={nomenclatureData}
            value={nomenclatureData?.options.filter(
              (nomenclature) =>
                nomenclature.value === watch(FirstStepIds.CLASSIFICATION)
            )}
            icon={<CaretDownOutlined />}
          />
          <ControllerA
            name={contentData.id}
            label={contentData.title}
            control={control}
            item={contentData}
            icon={<CaretDownOutlined />}
          />
        </div>
        <Form.Item>
          <div className="firstPage-row">
            <h2>Cavablandırılan sənəd</h2>
            <Button type="primary">İmtina et</Button>
          </div>
          <div className="firstPage-row">
            <h2>Əlaqəli sənəd</h2>
            <Button type="primary" htmlType="submit">
              İmtina et
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FirstPage;
