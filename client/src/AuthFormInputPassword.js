import { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import AuthFormInput from './AuthFormInput';

function AuthFormInputPassword({ label }) {
  const [isPassword, setIsPassword] = useState(true);

  return (
    <AuthFormInput 
      type={`${isPassword ? 'password' : 'text'}`} label={label} preIcon={faKey} postIcon={isPassword ? faEye : faEyeSlash} onPostIconClick={()=>setIsPassword(!isPassword)} />
  );
}

export default AuthFormInputPassword;
