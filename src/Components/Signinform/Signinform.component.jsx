import { useState } from "react";
import { AuthSiginwithEmailandPassword,createUserDocumentFromAuth,signInwithGooglePopup} from '../../Utils/Firebase/Firebase.utils'
import InputForm from "../input-form/input-form.component";
import './Siginform.styles.scss'
import Button from "../button/Button.component";
const Signinform = () => {
  const defaultFormFields = {
    email: '',
    password: '',
  
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password } = formFields;
  console.log(formFields);

  const SiginwithGoogle = async () => {
    const { user } = await signInwithGooglePopup();
    await createUserDocumentFromAuth(user);
};

  const resetFormFields =()=>{
    setFormFields(defaultFormFields);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await  AuthSiginwithEmailandPassword(email,password);
      alert("You have sucessfully signed in",response);
      resetFormFields();
  
    }catch(error){
     switch(error.code){
        case  'auth/wrongpassword':
        alert("Enter the Correct Password")
        break;
        case './auth/user-not-found':
        alert("Enter the right credientials")
        break;
        default: console.log(error.message)
     }
   
    }
}
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h1>Already have an account?</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <InputForm
        label="Email"
        type = 'email'
        name = 'email'
        required
        onChange={(e)=>handleChange(e)}
        value = {email}
        
         />
        <InputForm
        label = "Password"
        type = 'password'
        name = 'password'
        required
        onChange={(e)=>handleChange(e)}
        value = {password}
        
         />
        <div className="buttons-container">
        <Button  type ="submit" onClick = {handleSubmit} >Sign In </Button>
        <Button type = "button" buttonType={'google'}  onClick = {SiginwithGoogle} >Google Sigin </Button>     
        </div>
       
      </form>
    </div>
  );
};

export default Signinform;
