import * as Yup from "yup";

import { loginSchema } from "@/yupconfigs";

export type loginInitalValuesType = Yup.InferType<typeof loginSchema>;
