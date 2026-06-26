import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Chris";
  return (
    <main>
      <h1>Collect feedback to build better products</h1>
      <div>
        Create a feedback board in minutes, prioritize features and build
        products your customers will love!
      </div>
      <ButtonLogin isLoggedIn={isLoggedIn} name={name}></ButtonLogin>
    </main>
  );
}
