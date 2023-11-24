import { useFormContext } from "react-hook-form";
import TextArea from "../../../components/TextArea";

const Main = () => {
  const methods = useFormContext();
  const {
    control,
    formState: { errors: formErrors },
  } = methods;
  return (
    <div>
      <form {...methods}>
        <div className="esas-row">
          <h4>Mətn</h4>
          <TextArea
            rows={4}
            name="orderData.mainTextData.body"
            control={control}
            error={formErrors.orderData?.mainTextData?.body}
          />
          {formErrors?.orderData?.mainTextData?.body && (
            <p className="err">
              {formErrors?.orderData?.mainTextData?.body.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Main;
