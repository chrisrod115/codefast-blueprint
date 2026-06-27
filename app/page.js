import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Chris";
  return (
    <main>
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto  flex justify-between items-center px-8 py-2">
          <div className="font-bold">CodeSaaS</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link-hover">Pricing</a>
            <a className="link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name}></ButtonLogin>
          </div>
        </div>
      </section>
      <section className="px-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
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
