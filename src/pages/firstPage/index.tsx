import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "antd";
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
      <div className="firstPage-row">
        <h2>Əsas məlumatlar</h2>
        <form>
          <ControllerA
            control={control}
            item={appointmentData}
            icon={<CaretDownOutlined />}
          />
          <ControllerA
            control={control}
            item={classificationData}
            icon={<CaretDownOutlined />}
          />
          <ControllerA
            control={control}
            item={nomenclatureData}
            value={nomenclatureData?.options.filter(
              (nomenclature) =>
                nomenclature.value === watch(FirstStepIds.CLASSIFICATION)
            )}
            icon={<CaretDownOutlined />}
          />
          <ControllerA
            control={control}
            item={contentData}
            icon={<CaretDownOutlined />}
          />
        </form>
      </div>
      <div className="firstPage-row">
        <h2>Cavablandırılan sənəd</h2>
        <Button type="primary">İmtina et</Button>
      </div>
      <div className="firstPage-row">
        <h2> Əlaqəli sənəd</h2>
        <Button type="primary" onClick={test}>
          İmtina et
        </Button>
      </div>
    </div>
  );
};

export default FirstPage;
