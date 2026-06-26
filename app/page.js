import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Chris";
  return (
    <main>
      <section className="px-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6">
          Collect feedback to build better products
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features and build
          products your customers will love!
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name}></ButtonLogin>
      </section>
    </main>
  );
}
