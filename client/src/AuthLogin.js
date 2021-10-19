import {
  Link
} from "react-router-dom";

function AuthLogin() {
  return (
    <>
      <h2 className="text-2xl">Welcome Back</h2>
      <p className="text-center text-sm px-8">Please Sign in to your account and continue with the Koogah experience</p>
      <form className="mt-16 flex flex-col justify-between w-full h-40">
        <input type="email" placeholder="Email"  />
        <input type="password" placeholder="Password"/>
        <Link to="/forgot">Forgot Password</Link>
        <button className="bg-primary">Sign In</button>
      </form>
    </>
  );
}

export default AuthLogin;
