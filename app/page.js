import ButtonLogin from "@/components/ButtonLogin";
import ListItems from "@/components/ListItems";

export default function Home() {
  const isLoggedIn = true;
  const pricing_features_list = [
    "Collect customer feedback",
    "Unlimited boards",
    "Admin dashboard",
    "24/7 support",
  ];
  const name = "Chris";
  return (
    <main>
      {/* Header Section */}
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
      {/* Hero Section */}
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
      {/* Pricing Section */}
      <section className="bg-base-200">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center">
            <p className="text-sm uppercase font-medium text-center text-primary">
              Pricing
            </p>
            A pricing that adapts to your needs
          </h2>
          <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-1 items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="upperclass text-sm font-medium opacity-60"></div>
              /month
            </div>
            <ul className="space-y-2">
              <ListItems>Collect customer feedback</ListItems>
              <ListItems>Unlimited boards</ListItems>
              <ListItems>Admin dashboard</ListItems>
              <ListItems>24/7 support</ListItems>
              <ButtonLogin
                isLoggedIn={isLoggedIn}
                name={name}
                extraStyle="w-full"
              ></ButtonLogin>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
