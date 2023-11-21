import * as yup from "yup";

export const mainDataSchema = () => ({
  mainData: yup.object().shape({
    appointment: yup.string().required("Təyinatı xanası daxil edilməyib"),
    classification: yup.string().required("Təsnifat xanası daxil edilməyib"),
    content: yup.string().required("Mezmun xanası daxil edilməyib"),
  }),
});

export const orderDataSchema = () => ({
  orderData: yup.object().shape({
    title: yup.object().shape({
      content: yup.string().required(),
      preambula: yup.string().required(),
    }),
    commandData: yup.object().shape({
      textArea: yup.string().required(),
      tableData: yup.array().of(
        yup.object().shape({
          no: yup.number().required(),
          band: yup.string().required(),
        })
      ),
    }),
    mainTextData: yup.object().shape({
      textArea: yup.string().required(),
    }),
  }),
});
