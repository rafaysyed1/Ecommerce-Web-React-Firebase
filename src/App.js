import Home from './Routes/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Routes/Navigation/Navigation'
import Authentication from './Routes/Authentication/Authentication'
import Shop from './Routes/Shop/Shop.component'
import Checkout from './Routes/Checkout/Checkout'
import Footer from './Components/Footer/Footer.component'
import { Fragment } from 'react'
const App = () => {

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
