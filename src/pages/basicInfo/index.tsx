import { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { Button, Typography } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import {
  FirstStepIds,
  appointmentData,
  classificationData,
  contentData,
  nomenclatureData,
} from "../../data/data.tsx";
import "./style.css";
import Dropdown from "../../components/Dropdown/index.tsx";
import Checkbox from "../../components/Checkbox/index.tsx";

const BasicInfo = () => {
  const methods = useFormContext();
  const {
    control,
    formState: { errors: formErrors },
    watch,
    setValue,
  } = methods;

  const mainDataName = "mainData";

  const handleChangeCheckbox = useCallback(
    (checked: boolean) => {
      setValue("nomenclatureCheck", checked);
    },
    [setValue]
  );

  return (
    <div className="firsPage-container">
      <form {...methods}>
        <div className="page-row">
          <h2>Əsas məlumatlar</h2>
          <div className="box-column">
            <Typography className="typography_item">
              {appointmentData.title}
            </Typography>
            <div>
              <Dropdown
                name={`${mainDataName}.${appointmentData.id}`}
                control={control}
                value={watch(`${mainDataName}.${appointmentData.id}`)}
                item={appointmentData}
                icon={<CaretDownOutlined />}
                error={formErrors?.mainData?.appointment}
              />
              {formErrors?.mainData?.appointment && (
                <p className="err">{(formErrors?.mainData?.appointment as any)?.message}</p>
              )}
            </div>
          </div>
          <div className="box-column">
            <Typography className="typography_item">
              {classificationData.title}
            </Typography>
            <div>
              <Dropdown
                name={`${mainDataName}.${classificationData.id}`}
                value={watch(`${mainDataName}.${classificationData.id}`)}
                control={control}
                item={classificationData}
                icon={<CaretDownOutlined />}
                error={formErrors?.mainData?.classification}
              />
              {formErrors?.mainData?.classification && (
                <p className="err">{(formErrors?.mainData?.classification as any)?.message}</p>
              )}
            </div>
          </div>
          <div className="box-column">
            <Typography className="typography_item">
              {nomenclatureData.title}
            </Typography>
            <div>
              <Dropdown
                name={`${mainDataName}.${nomenclatureData.id}`}
                disabled
                control={control}
                item={nomenclatureData}
                value={nomenclatureData?.options.filter(
                  (nomenclature) =>
                    nomenclature.value ===
                    watch(`${mainDataName}.${FirstStepIds.CLASSIFICATION}`)
                )}
                icon={<CaretDownOutlined />}
              />
              <Checkbox
                name={`${mainDataName}.nomenclatureCheck`}
                control={control}
                value={watch("nomenclatureCheck")}
                onChange={handleChangeCheckbox}
              />
            </div>
          </div>
          <div className="box-column">
            <Typography className="typography_item">
              {contentData.title}
            </Typography>
            <div>
              <Dropdown
                name={`${mainDataName}.${contentData.id}`}
                value={watch(`${mainDataName}.${contentData.id}`)}
                control={control}
                item={contentData}
                icon={<CaretDownOutlined />}
                error={formErrors.mainData?.content}
              />
              {formErrors?.mainData?.content && (
                <p className="err">{(formErrors?.mainData as any)?.content?.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="page-row-content">
          <h2>Cavablandırılan sənəd</h2>
          <Button type="primary">İmtina et</Button>
        </div>
        <div className="page-row-content">
          <h2>Əlaqəli sənəd</h2>
          <Button type="primary">İmtina et</Button>
        </div>
      </form>
    </div>
  );
};

export default BasicInfo;
