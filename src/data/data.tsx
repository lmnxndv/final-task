export interface OptionsSection {
  id: FirstStepIds;
  title: string;
  options: OptionsLabel[];
}

export enum FirstStepIds {
  APPOINTMENT = "appointment",
  CLASSIFICATION = "classification",
  NOMENCLATURE = "nomenclature",
  CONTENT = "content",
}
interface OptionsLabel {
  label: string;
  value: string;
}

export const items = [
  {
    title: "ƏSAS MƏLUMATLAR",
    type: "mainData",
  },
  {
    title: "ƏMR MƏLUMATLARI",
    type: "orderData",
  },
  {
    title: "ELEKTRON FORMA",
    type: "electronForm",
  },
  {
    title: "PAYLANACAQLAR SİYAHISI",
    type: "distributionList",
  },
];

export const appointmentData: OptionsSection = {
  id: FirstStepIds.APPOINTMENT,
  title: "Təyinat",
  options: [
    { label: "Ümümi", value: "all" },
    { label: "Apellasiya şurası", value: "apellation" },
    { label: "Təhlükəsizlik şurası", value: "security" },
  ],
};
export const classificationData: OptionsSection = {
  id: FirstStepIds.CLASSIFICATION,
  title: "Təsnifat",
  options: [
    { label: "Digər", value: "other" },
    { label: "Göstəriş məktubu", value: "letter" },
    { label: "Metodiki tövsiyyə", value: "methodicalAdvice" },
  ],
};
export const nomenclatureData: OptionsSection = {
  id: FirstStepIds.NOMENCLATURE,
  title: "Nomenklatura",
  options: [
    { label: "12.1", value: "other" },
    { label: "12.2", value: "letter" },
    { label: "12.3", value: "methodicalAdvice" },
  ],
};

export const contentData: OptionsSection = {
  id: FirstStepIds.CONTENT,
  title: "Məzmun",
  options: [
    { label: "Test-1", value: "test1" },
    { label: "Test-2", value: "test2" },
    { label: "Test-3", value: "test3" },
  ],
};

export const distributionUserList = [
  {
    id: 1,
    name: "Hüseynov Nihad",
    position: "Baş İdarə Rəisi",
  },
  {
    id: 2,
    name: "Məmmədov Ramin",
    position: "Rəis Müavini",
  },
  {
    id: 3,
    name: "Ağayev Eltac",
    position: "Katib",
  },
];

export const distributionList = [
  {
    id: 1,
    title: "İmzalamaya vermə",
  },
  {
    id: 2,
    title: "Vizaya vermə",
  },
  {
    id: 1,
    title: "Digər strukturlarla razılaşma",
  },
];
