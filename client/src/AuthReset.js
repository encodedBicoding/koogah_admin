import AuthFormInputPassword from './AuthFormInputPassword';
import AuthFormButton from './AuthFormButton';

function AuthReset() {
  return (
    <>
      <AuthFormInputPassword label="Password" />
      <AuthFormInputPassword label="Confirm Password" />
      <AuthFormButton text="update password" />
    </>
  );
}

export default AuthReset;
