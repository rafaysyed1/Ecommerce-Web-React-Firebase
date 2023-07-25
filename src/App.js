import {useEffect} from "react";
import {useDispatch} from 'react-redux'
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './Utils/Firebase/Firebase.utils';
import Home from './Routes/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Routes/Navigation/Navigation'
import Authentication from './Routes/Authentication/Authentication'
import Shop from './Routes/Shop/Shop.component'
import Checkout from './Routes/Checkout/Checkout'
import Footer from './Components/Footer/Footer.component'
import { Fragment } from 'react'
import { setCurrentUser } from "./store/user/user.action";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
     dispatch(setCurrentUser(user)); 
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Fragment>
    <Routes>
      <Route path='/' element ={<Navigation/>} >
      <Route index element = {<Home />} />
      <Route path='shop/*' element = {<Shop/>} />
      <Route path='auth' element = {<Authentication/>} />
      <Route path='checkout' element = {<Checkout/>} />
    
      </Route>
      
      
    </Routes>
    <Footer/>
    </Fragment>
  );
}

export default App;
