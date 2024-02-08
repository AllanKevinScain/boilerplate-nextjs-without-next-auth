import { SignOutButton } from "./signOutButton";

export function Header() {
  return (
    <nav className="flex items-end bg-emerald-500 w-full h-[70px] shadow-lg">
      <div className="flex justify-between items-center w-full  bg-emerald-900 rounded-t-lg p-4">
        <span>Logo</span>

        <SignOutButton />
      </div>
    </nav>
  );
}
