import * as yup from "yup";
import { FirstStepIds } from "./data/data";

export const mainDataSchema = yup.object().shape({
  appointment: yup.string().required(),
  classification: yup.string().required(),
  content: yup.string().required(),
  namenclature: yup.string().required(),
});
