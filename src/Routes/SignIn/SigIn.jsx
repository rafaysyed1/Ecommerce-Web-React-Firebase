import {signInwithGooglePopup,createUserDocumentFromAuth} from '../../Utils/Firebase/Firebase.utils'
const SignIn =()=>{
    const LogGoogleUser = async()=>{
     const {user} = await signInwithGooglePopup();
     const userDocRef = await  createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>Signin here</h1>
            <button onClick = {LogGoogleUser}>
            Sign In with Google 
            </button>
        </div>
    )

}
export default SignIn