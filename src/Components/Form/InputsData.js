export const Inputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Nome (mínimo 3 letras)",
    errormessage: "O nome deve conter apenas letras e no mínimo 3 letras!",
    label: "Nome",
    maxLength: "20",
    pattern: "^[A-Za-z]{3,20}$",
  },
  {
    id: 2,
    name: "phone",
    type: "tel",
    placeholder: "9** *** ***",
    errormessage: "O seu número de telemóvel dever ser válido!",
    label: "Telemóvel",
    maxLength: "9",
    pattern: "^[0-9]{9}$",
  },
  {
    id: 3,
    name: "hour",
    type: "text",
    placeholder: "--:--h",
    errormessage: "Deve de selecionar um horário!",
    label: "Hora",
    readOnly: "readOnly",
    cursor: "pointer",
  },
  {
    id: 4,
    name: "date",
    type: "date",
    errormessage: "Selecione o dia!",
    label: "Data",
    cursor: "pointer",
  },
];

export const InputHour = [
  { value: 9, hour: "09:00h" },
  { value: 10, hour: "10:00h" },
  { value: 11, hour: "11:00h" },
  { value: 12, hour: "12:00h" },
  { value: 14, hour: "14:00h" },
  { value: 15, hour: "15:00h" },
  { value: 16, hour: "16:00h" },
  { value: 17, hour: "17:00h" },
  { value: 18, hour: "18:00h" },
  { value: 19, hour: "19:00h" },
];