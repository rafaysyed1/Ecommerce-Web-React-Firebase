import { useState } from "react";
import InputForm from "../input-form/input-form.component";
import { SignIpContainer, SigInButtonsContainer } from './Siginform.styles.jsx';
import Button, { buttonTypeClasses } from "../button/Button.component";
import { useDispatch } from "react-redux";
import { googleSignInStart,emailSignInStart } from "../../store/user/user.action";
const Signinform = () => {
  const dispatch = useDispatch();
  const defaultFormFields = {
    email: '',
    password: '',
  
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password } = formFields;
  console.log(formFields);




  const SiginwithGoogle = async () => {
   dispatch(googleSignInStart());
};

  const resetFormFields =()=>{
    setFormFields(defaultFormFields);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      dispatch(emailSignInStart( email, password ));
      console.log(email, password); 
      resetFormFields();
  
    } catch (error) {
      switch(error.code){
        case  'auth/wrong-password':
          alert("Enter the Correct Password");
          break;
        case 'auth/user-not-found':
          alert("Enter the right credentials");
          break;
        default: 
          console.log(error.message);
      }
    }
  }
  
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignIpContainer>
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
        <SigInButtonsContainer>
        <Button  type ="submit" onClick = {handleSubmit} >Sign In </Button>
        <Button type = "button" buttonType={buttonTypeClasses.google}  onClick = {SiginwithGoogle} >Google Sigin </Button>     
        </SigInButtonsContainer>
       
      </form>
    </SignIpContainer>
  );
};

export default Signinform;
