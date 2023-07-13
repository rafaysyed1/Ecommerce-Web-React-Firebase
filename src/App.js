import Home from './Routes/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Routes/Navigation/Navigation'
import SignIn from './Routes/SignIn/SigIn'
import SignUp from './Routes/SignUp/SignUp'
const Shop =()=>{
  return (
    <div>
      <h1>I am the shop</h1>
    </div>
  )
}
const App = () => {

  return (
    <Routes>
      <Route path='/' element ={<Navigation/>} >
      <Route index element = {<Home />} />
      <Route path='shop' element = {<Shop/>} />
      <Route path='signin' element = {<SignIn/>} />
      <Route path='signup' element = {<SignUp/>} />
      </Route>
      
      
    </Routes>
  );
}

export default App;
