import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import AuthFormInput from './AuthFormInput';
import AuthFormButton from './AuthFormButton';

function AuthForgot() {
  return (
    <>
      <AuthFormInput type="email" label="Email" preIcon={faEnvelope} />
      <AuthFormButton text="submit"  />
    </>
  );
}

export default AuthForgot;
