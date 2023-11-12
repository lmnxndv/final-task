import { useForm } from "react-hook-form";
import { Button } from "antd";
import { ArrowRightOutlined, CaretDownOutlined } from "@ant-design/icons";
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
  const { handleSubmit, control, watch } = useForm({
    resolver: yupResolver(mainDataSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Data:", data);
  };

  return (
    <div className="firstPage-container">
      <form onSubmit={handleSubmit(onSubmit)} id="hook-form">
        <div className="page-row">
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
        <div className="page-row">
          <h2>Cavablandırılan sənəd</h2>
          <Button type="primary">İmtina et</Button>
        </div>
        <div className="page-row">
          <h2>Əlaqəli sənəd</h2>
          <Button type="primary">İmtina et</Button>
          <div className="btns">
            <Button type="primary">İmtina et</Button>
            <Button
              type="primary"
              htmlType="submit"
              form="hook-form"
              style={{ background: "#008000", color: "#fff" }}
              // onClick={}
            >
              Davam et <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FirstPage;
