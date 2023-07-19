import Signupform from '../../Components/Signupform/Signupform.component';
import Signinform from '../../Components/Signinform/Signinform.component';
// import {
 
//     signInwithGooglePopup,
   
//     createUserDocumentFromAuth
// } from '../../Utils/Firebase/Firebase.utils';
import { AuthenticationContainer } from './Authentication.styles';

const Authentication = () => {

   

    return (
        <AuthenticationContainer>
           <Signinform />
            <Signupform />
           
        </AuthenticationContainer>
    );
    }

export default Authentication;
