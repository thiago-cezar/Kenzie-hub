import * as yup from "yup";

export const schemaLogin = yup.object({
  email: yup
    .string()
    .email("insira um email valido")
    .required("campo obrigatório"),
  password: yup.string().required("campo obrigatório"),
});

export const schemaRegister = yup.object({
  email: yup
    .string()
    .email("insira um email valido")
    .required("campo obrigatório"),
  password: yup
    .string()
    .required("campo obrigatório")
    .min(8, "Mínimo 8 caracteres")
    .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])/, "senha invalida"),
  confirmPassword: yup
    .string()
    .required("campo obrigatório")
    .oneOf([yup.ref("password")], "Confirmação deve ser igual a senha"),
  contact: yup.string().required("campo obrigatório"),
  course_module: yup.string().required("campo obrigatório"),
  name: yup.string().required("campo obrigatório"),
  bio: yup.string().required("campo obrigatório"),
});

export const schemaModal = yup.object({
  title: yup
    .string().required("campo obrigatório")
});
