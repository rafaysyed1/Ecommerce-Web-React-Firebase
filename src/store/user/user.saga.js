import {takeLatest,all,call,put, take} from 'redux-saga/effects'
import { USER_ACTION_TYPES } from './user.types'
import {AuthCreateUserWithEmailAndPassword, AuthSiginWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, signInWithGooglePopup, signOutUser } from '../../Utils/Firebase/Firebase.utils'
import { SigInSuccess, SignInFailed, SignOutFailed, SignOutSuccess, SignUpFailed, SignUpSuccess } from './user.action';

export function* signOut (){
    try {
        yield call(signOutUser)
        yield put (SignOutSuccess());
    } catch (error) {
        yield put (SignOutFailed());
    }
}
export function* getSnapShotFromUser (userAuth,additionalDetails){
    try {
      const userSnapShot = yield call(createUserDocumentFromAuth
        ,userAuth,
        additionalDetails);
      console.log("User SnapShot is",userSnapShot)
      yield put(SigInSuccess({id : userSnapShot.id,...userSnapShot}));
    } catch (error) {
     yield put(SignInFailed(error));
    }
 }
 
 export function* isUserAuthenticated (){
    try {
     const userAuth = yield getCurrentUser();
     if(!userAuth) return;
     yield getSnapShotFromUser(userAuth, {}); // added {} as second argument
    } catch (error) {
        yield put(SignInFailed(error));
    }
}

export function* oncheckUserSession (){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function * signInWithGoogle (){
    try {
        const {user} = yield call(signInWithGooglePopup);
        yield call(getSnapShotFromUser,user)

    } catch (error) {
        yield put(SignInFailed(error));
    }
}
export function * signInWithEmail ({payload : {email,password}}){
    
    try {
        const {user}= yield call(AuthSiginWithEmailAndPassword, email, password);
        yield call(getSnapShotFromUser,user);
    } catch (error) {
        yield put(SignInFailed(error));
        alert(error);
    }
}

export function* signInAfterSignUp({payload: {user,additionalDetails}}){
yield call(getSnapShotFromUser,user,additionalDetails)
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {
      const { user } = yield call(
        AuthCreateUserWithEmailAndPassword,
        email,
        password
      );
      // yield put(SignUpSuccess(user, { displayName })); this was causing an error
      yield put(SignUpSuccess({ user, additionalDetails: { displayName } })); // We need to pass user and additionalDetails in an object
    } catch (error) {
      yield put(SignUpFailed(error));
    }
  }
  
export function * onSignUpSuccess (){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS,signInAfterSignUp)
}
export function *onEmailSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START,signInWithEmail)
}
export function * onGoogleSignInStart (){
    yield takeLatest(USER_ACTION_TYPES.GOOOGLE_SIGN_IN_START,signInWithGoogle)
}
export function * onSignUpStart (){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START,signUp)
}
export function * onSignOutStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START,signOut)
}


export function* userSagas (){
    yield all([call(oncheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpSuccess),
        call(onSignUpStart),
        call(onSignOutStart)]);
}
