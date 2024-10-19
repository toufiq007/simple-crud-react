export const initialUser = [
  {
    id: 1,
    name: "Mostafizur Rahamn",
    age: 25,
    email: "t.limon@gamil.com",
    occupation: "Student",
  },
  {
    id: 2,
    name: "Toufiq Hasan",
    age: 22,
    email: "toufiq@gamil.com",
    occupation: "Businessmen",
  },
  {
    id: 3,
    name: "Hasan sheikh",
    age: 26,
    email: "t.limon@gamil.com",
    occupation: "Employee",
  },
];

export const occupucationList = [
  { id: crypto.randomUUID(), occupucation: "Businessmen" },
  { id: crypto.randomUUID(), occupucation: "Student" },
  { id: crypto.randomUUID(), occupucation: "Employee" },
];

export const initialFormData = {
  id: "",
  name: "",
  email: "",
  age: "",
  occupation: "",
};
