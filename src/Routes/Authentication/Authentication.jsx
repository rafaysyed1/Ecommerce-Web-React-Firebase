
import Signupform from '../../Components/Signupform/Signupform.component';
import Signinform from '../../Components/Signinform/Signinform.component';
import './Authentication.styles.scss'
import {
 
    signInwithGooglePopup,
   
    createUserDocumentFromAuth
} from '../../Utils/Firebase/Firebase.utils';

const Authentication = () => {

   

    return (
        <div className='authentication-container'>
           <Signinform />
            <Signupform />
           
        </div>
    );
    }

export default Authentication;
