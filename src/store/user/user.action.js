import { createAction } from "../../Utils/Reducer/reducer.utils"
import { USER_ACTION_TYPES } from "./user.types"
export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOOGLE_SIGN_IN_START);
export const emailSignInStart = (email, password) => createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });
export const SignUpStart = (email,password,displayName)=> createAction(USER_ACTION_TYPES.SIGN_UP_START,
   {
      email,
      password,
      displayName,
   });
export const SignUpSuccess = (user)=>createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS,user);

export const SignUpFailed = (error)=> createAction(USER_ACTION_TYPES.SIGN_UP_FAILED,error);

export const SigInSuccess = (user,additionalDetails) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user , additionalDetails);
export const SignInFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED,error);

export const SignOutStart = ()=> createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const SignOutSuccess = ()=> createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const SignOutFailed  = (error)=> createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED,error);