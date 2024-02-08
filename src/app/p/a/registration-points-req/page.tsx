import { Header } from "@/components";

export default async function Page() {
  await fetch("http://localhost:3000/api", {
    method: "GET",
    cache: "no-cache",
  });

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <h1>registration-points-req</h1>
    </div>
  );
}
