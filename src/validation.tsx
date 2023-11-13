import * as yup from "yup";

export const mainDataSchema = yup.object().shape({
  appointment: yup.string().required("Təyinatı xanası daxil edilməyib"),
  classification: yup.string().required("Təsnifat xanası daxil edilməyib"),
  content: yup.string().required("Mezmun xanası daxil edilməyib"),
});
