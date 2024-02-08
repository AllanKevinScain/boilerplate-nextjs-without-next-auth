"use client";
import { useFormik } from "formik";
import { KeySquare } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import color from "tailwindcss/colors";

import { CustomInput } from "@/components";
import { AuthContext } from "@/contexts";
import { loginInitalValuesType } from "@/types";
import { loginInitialValues, loginSchema } from "@/yupconfigs";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(values: loginInitalValuesType) {
    await signIn(values);
  }

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    touched,
  } = useFormik<loginInitalValuesType>({
    initialValues: loginInitialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => handleSignIn(values),
    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-2xl text-center">Auth</h1>
        <form onSubmit={handleSubmit}>
          <section className="bg-emerald-500 rounded-md p-4 w-[440px]">
            <h2 className="font-medium text-md text-center mb-2">Login next</h2>
            <CustomInput
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              type="text"
              placeholder="E-mail"
              className="w-full rounded-b-none"
            />
            <CustomInput
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              type="password"
              placeholder="Senha"
              className="w-full rounded-t-none"
            />
            {!!errors.email && touched.email && (
              <span className="text-red-900 text-xs font-light">
                {errors.email}
              </span>
            )}
            {!!errors.password && touched.password && (
              <span className="text-red-900 text-xs font-light">
                {errors.password}
              </span>
            )}

            <div className="flex justify-between mt-2">
              <label
                htmlFor="check"
                className="flex items-center justify-center gap-1 text-emerald-100 cursor-pointer"
              >
                <CustomInput type="checkbox" id="check" name="check" />
                <span className="text-sm font-medium">Manter-me conectado</span>
              </label>
              <Link href="/" className="transition-all hover:underline">
                Esqueceu a senha?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full h-10 bg-emerald-900 rounded-md mt-8 outline-none transition-all hover:text-emerald-500 disabled:bg-emerald-300 disabled:text-emerald-950"
            >
              <KeySquare
                color={color.emerald[700]}
                size={24}
                className="absolute top-1/2 left-6 -translate-x-1/2 -translate-y-1/2"
              />
              Sign in
            </button>
          </section>
        </form>
      </div>
    </div>
  );
}
