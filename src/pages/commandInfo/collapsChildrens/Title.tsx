import { useFormContext } from "react-hook-form";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";

const Title = () => {
  const methods = useFormContext();
  const {
    control,
    formState: { errors: formErrors },
  } = methods;

  console.log("🚀 ~ formErrors:", formErrors);
  console.log("values", methods.getValues());

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
            control={control}
            error={formErrors?.orderData?.title?.content}
          />
          {formErrors?.orderData?.title?.content && (
            <p className="err">
              {(formErrors?.orderData?.title?.content as any)?.message}
            </p>
          )}
        </div>
        <div className="first-input-row">
          <h4>Preambula</h4>
          <TextArea
            name="orderData.title.preambula"
            control={control}
            rows={4}
            error={formErrors?.orderData?.title?.preambula}
          />
          {formErrors?.orderData?.title?.preambula && (
            <p className="err">
              {(formErrors?.orderData?.title?.preambula as any)?.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Title;
