"use server";
import { cookies } from "next/headers";

export async function getToken() {
  return cookies().get("authfofao.token");
}

export async function deleteToken() {
  cookies().delete("authfofao.token");
  cookies().delete("authfofao.role");
}

export async function setToken(value: string) {
  cookies().set("authfofao.token", value, {
    secure: true,
    priority: "high",
    maxAge: 60 * 60 * 4 /* 4h */,
  });
  cookies().set("authfofao.role", "ADMIN", {
    secure: true,
    maxAge: 60 * 60 * 4 /* 4h */,
  });
}
