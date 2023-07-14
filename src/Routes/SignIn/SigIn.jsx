
import Signupform from '../../Components/Signupform/Signupform.component';
import {
 
    signInwithGooglePopup,
   
    createUserDocumentFromAuth
} from '../../Utils/Firebase/Firebase.utils';

const SignIn = () => {

    const LogGooglePopUser = async () => {
        const { user } = await signInwithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Signin here</h1>
            <button onClick={LogGooglePopUser}>
                Sign In with Google Pop Up
            </button>
            <Signupform />
           
        </div>
    );
    }

export default SignIn;
