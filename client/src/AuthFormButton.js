
function AuthFormButton({text, onClick}) {
  return (
    <button 
      className="bg-primary uppercase py-2 rounded-md mt-9 shadow-lg tracking-wider"
      onClick={onClick}
    >{text}</button>
  );
}

export default AuthFormButton;
