import { useState } from "react";
import {AuthCreateUserwithEmailandPassword,createUserDocumentFromAuth} from '../../Utils/Firebase/Firebase.utils'
import InputForm from "../input-form/input-form.component";
import './Signupform.styles.scss'
import Button from "../button/Button.component";
const Signupform = () => {
  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);

  const resetFormFields =()=>{
    setFormFields(defaultFormFields);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    try {
      // Create user with email and password
      const userCredential = await AuthCreateUserwithEmailandPassword(email, password);
      const user = userCredential.user;
      console.log("User created successfully:", user);
      alert("User Created Successfully");
      resetFormFields();
  
      try {
        await createUserDocumentFromAuth(user, { displayName });
        alert("User data added to the user's table");
        ;
      } catch (error) {
        alert("Unable to add User Data: " + error.message);
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create multiple users with the same email");
      }
      console.log("Error creating user:", error.message);
    }
  };
  
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h1>Don't have an account?</h1>
      <span>Sign up with your email and password</span>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <InputForm
        label='DisplayName'
        type = 'text'
        name = 'displayName'
        required
        onChange={(e)=>handleChange(e)}
        value = {displayName}
         />
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
       
       
        <InputForm
        label = "Confirm Password"
        type = 'password'
        name = 'confirmPassword'
        required
        onChange={(e)=>handleChange(e)}
        value = {confirmPassword}
        
         />
        
        <Button  type ="submit" >Sign Up </Button>
      </form>
    </div>
  );
};

export default Signupform;
