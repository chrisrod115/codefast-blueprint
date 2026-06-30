import Link from "next/link";
const ButtonLogin = ({ isLoggedIn, name }) => {
  if (isLoggedIn) {
    return (
      <Link href="/dashboard" className="btn btn-primary btn-shadow">
        Welcome back {name}
      </Link>
    );
  } else {
    return <button className="btn btn-warning">Login</button>;
  }
};

export default ButtonLogin;
