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
      content: yup.string().required("Xana boş qalmamalıdır!"),
      preambula: yup.string().required("Xana boş qalmamalıdır!"),
    }),
    commandData: yup.object().shape({
      bands: yup
        .array()
        .of(
          yup.object().shape({
            body: yup.string().required(),
          })
        )
        .min(1, "Xana boş qalmamalıdır!"),
    }),
    mainTextData: yup.object().shape({
      body: yup.string().required("Xana boş qalmamalıdır!"),
    }),
  }),
});

export const distributorSchema = () => ({
  distributionList: yup.object().shape({
    signer: yup.object().shape({
      name: yup.string().required("Xana boş qalmamalıdır!"),
    }),
    visaEmployees: yup
      .array()
      .of(
        yup.object().shape({
          name: yup.string().required(),
        })
      )
      .min(1, "Xana boş qalmamalıdır!"),
    anotherUnitEmployees: yup
      .array()
      .of(
        yup.object().shape({
          name: yup.string().required(),
        })
      )
      .min(1, "Xana boş qalmamalıdır!"),
  }),
});
