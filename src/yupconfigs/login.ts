import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("Email inválido").required("Campo obrigatório!"),
  password: Yup.string()
    .min(8, "Senha muito curta")
    .max(20, "Senha muito longa")
    .required("Senha obrigatória"),
  check: Yup.boolean(),
});
