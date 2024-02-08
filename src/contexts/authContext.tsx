"use client";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useEffect, useState } from "react";

import {
  getToken,
  recoverUserInformation,
  setToken,
  SignInRequest,
} from "@/services";

type SignInData = {
  email: string;
  password: string;
};
type UserType = {
  id: string;
  full_name: string;
  email: string;
  role: string;
  city: string;
} | null;

type AuthContextType = {
  isAuthenticated: boolean;
  user: UserType;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useRouter();
  const [userState, setUserState] = useState<UserType>(null);

  const isAuthenticated = !!userState;

  async function signIn(data: SignInData) {
    /* Aqui faz a chamada do back */
    const { email, password } = data;

    const { token, user } = await SignInRequest({
      email,
      password,
    });

    await setToken(token);
    setUserState(user);

    if (user.role === "ADMIN") {
      return navigate.push("/p/a/registration-points-req");
    }

    return navigate.push("/p/gotched-points");
  }

  useEffect(() => {
    (async () => {
      const token = await getToken();

      if (token?.value) {
        recoverUserInformation().then((response) =>
          setUserState(response.user)
        );
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user: userState, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
