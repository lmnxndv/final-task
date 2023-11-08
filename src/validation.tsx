import * as yup from "yup";
import { FirstStepIds } from "./data/data";

export const mainDataSchema = yup.object({
  [FirstStepIds.APPOINTMENT]: yup.string().required(),
  [FirstStepIds.CLASSIFICATION]: yup.string().required(),
  [FirstStepIds.CONTENT]: yup.string().required(),
  [FirstStepIds.NOMENCLATURE]: yup.string().required(),
});
