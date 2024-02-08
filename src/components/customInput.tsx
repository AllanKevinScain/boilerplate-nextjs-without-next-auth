import { twMerge } from "tailwind-merge";

import { CustomInputInterface } from "@/types";

export function CustomInput(props: CustomInputInterface) {
  const { className } = props;

  return (
    <input
      {...props}
      className={twMerge(
        "border-none outline-none bg-emerald-200 rounded-md px-2 py-1 text-emerald-950 placeholder:text-emerald-700",
        className
      )}
    />
  );
}
