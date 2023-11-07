interface IOptionsData {
  sections: OptionsSection[];
}
interface OptionsSection {
  id: number;
  title: string;
  options: OptionsLabel[];
}
interface OptionsLabel {
  label: string;
  value: string;
}

const optionsData: IOptionsData = {
  sections: [
    {
      id: 1,
      title: "Təyinat",
      options: [
        { label: "Ümümi", value: "Ümümi" },
        { label: "Apellasiya şurası", value: "Apellasiya şurası" },
        { label: "Təhlükəsizlik şurası", value: "Təhlükəsizlik şurası" },
      ],
    },
    {
      id: 2,
      title: "Təsnifat",
      options: [
        { label: "Digər", value: "Digər" },
        { label: "Göstəriş məktubu", value: "Göstəriş məktubu" },
        { label: "Metodiki tövsiyyə", value: "Metodiki tövsiyyə" },
      ],
    },
    {
      id: 3,
      title: "Nomenklatur",
      options: [
        { label: "12.1", value: "12.1" },
        { label: "12.2", value: "12.2" },
        { label: "12.3", value: "12.3" },
      ],
    },
    {
      id: 4,
      title: "Mezmun",
      options: [
        { label: "Test-1", value: "test-1" },
        { label: "Test-2", value: "test-2" },
        { label: "Test-3", value: "test-3" },
      ],
    },
  ],
};

export default optionsData;
