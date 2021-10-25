import {
  Link
} from "react-router-dom";

function AuthLogin() {
  return (
    <>
      <input type="email" placeholder="Email" className="border-2 bg-gray-50 mt-7"  />
      <input type="password" placeholder="Password" className="border-2 bg-gray-50 mt-7"/>
      <Link to="/forgot" className="text-primary text-sm mt-7">Forgot Password?</Link>
    </>
  );
}

export default AuthLogin;
