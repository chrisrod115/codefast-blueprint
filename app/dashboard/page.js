import Link from "next/link";
import ButtonLogout from "@/components/ButtonLogout";

export default function Dashboard() {
  return (
    <main>
      <h1>Private Dashboard</h1>
      <Link href="/">Go Home</Link>
      <ButtonLogout />
    </main>
  );
}
