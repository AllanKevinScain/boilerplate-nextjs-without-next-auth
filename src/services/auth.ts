type SignInRequestData = {
  email: string;
  password: string;
};

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function SignInRequest(data: SignInRequestData) {
  await delay();

  return {
    token: crypto.randomUUID(),
    user: {
      id: `${Math.random()}`,
      full_name: "joaozin",
      email: "example@gmail.com",
      role: "ADMIN",
      city: "San Francisco",
    },
  };
}

export async function recoverUserInformation() {
  await delay();

  return {
    user: {
      id: `${Math.random()}`,
      full_name: "joaozin",
      email: "example@gmail.com",
      role: "ADMIN",
      city: "San Francisco",
    },
  };
}
