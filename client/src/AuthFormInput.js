import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AuthFormInput({type, label, preIcon, postIcon, onPostIconClick}) {
  const [errors] = useState([]);
  const [focused, setFocused] = useState(false);

  return (
    <>
      <div 
        className={`border-2 ${focused ? 'border-primary' : '' } rounded-md bg-gray-50 mt-7 py-2 px-3 flex items-center relative`}
      >
        { preIcon && <FontAwesomeIcon icon={preIcon} className="mr-2" /> }
        <input 
          type={type} 
          placeholder={!focused ? label : ""} 
          className="focus:outline-none bg-gray-50 flex-1"
          onFocus={()=>setFocused(true)}
          onBlur={()=>setFocused(false)}  
          />
        { postIcon && <FontAwesomeIcon icon={postIcon} className="ml-2" onClick={onPostIconClick} /> }
        { focused && <label className="absolute -top-3.5">{label}</label> }
      </div>
      { errors.length > 0 && <p>This is the error message</p> }
    </>
  );
}

export default AuthFormInput;
