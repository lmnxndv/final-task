export interface OptionsSection {
  id: FirstStepIds;
  title: string;
  options: OptionsLabel[];
}

export enum FirstStepIds {
  APPOINTMENT = "appointment",
  CLASSIFICATION = "classification",
  NOMENCLATURE = "namenclature",
  CONTENT = "content",
}
interface OptionsLabel {
  label: string;
  value: string;
}

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
  title: "Mezmun",
  options: [
    { label: "Test-1", value: "test1" },
    { label: "Test-2", value: "test2" },
    { label: "Test-3", value: "test3" },
  ],
};
