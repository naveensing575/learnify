import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 border-b">
      <h1 className="text-lg font-bold">
        Learnify
      </h1>
      <ModeToggle />
    </nav>
  );
}
