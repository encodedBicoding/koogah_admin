import {
  Link
} from "react-router-dom";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import AuthFormButton from './AuthFormButton';
import AuthFormInput from './AuthFormInput';
import AuthFormInputPassword from './AuthFormInputPassword';

function AuthLogin() {

  const handleLogin = () => {
    console.log('sfdfdd')
  }

  return (
    <>
      <AuthFormInput type="email" label="Email" preIcon={faEnvelope} />
      <AuthFormInputPassword label="Password" />
      <Link to="/forgot" className="text-primary text-sm mt-7">Forgot Password?</Link>
      <AuthFormButton text="sign in" onClick={handleLogin} />
    </>
  );
}

export default AuthLogin;
