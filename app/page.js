import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Collect feedback to build better products</h1>
      <div>
        Create a feedback board in minutes, prioritize features and build
        products your customers will love!
      </div>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
