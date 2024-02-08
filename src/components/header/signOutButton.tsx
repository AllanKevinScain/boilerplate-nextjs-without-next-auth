"use client";

import { useRouter } from "next/navigation";

import { deleteToken } from "@/services";

export function SignOutButton() {
  const navigate = useRouter();

  async function SignOutRequest() {
    await deleteToken();
    navigate.push("/");
  }

  return (
    <button
      className="transition-all hover:text-red-500"
      onClick={SignOutRequest}
    >
      sign out
    </button>
  );
}
