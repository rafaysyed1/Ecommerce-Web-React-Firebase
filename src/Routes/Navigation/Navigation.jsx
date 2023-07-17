import { Fragment,createContext,useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as  CrownLogo} from '../../assets/crown.svg'
import { UserContext  } from "../../contexts/user-context"
import {signOutUser} from '../../Utils/Firebase/Firebase.utils'
import './Navigation.styles.scss'
import CartIcon from "../../Components/Cart-Icon/Cart-Icon.component"
import CartDropDown from "../../Components/Cart-DropDown/CartDropDown.component"
import { CartContext } from "../../contexts/cart-context"


const Navigation = () => {
    const {currentUser}= useContext(UserContext );
    const {isCartOpen} = useContext(CartContext)
    
    return (
        <Fragment>
            <div className="navigation">
                <Link to='/' className="logo-container"> 
                        <CrownLogo className="logo" />
                   
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                     Shop
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>
                            {' '}
                            Sign Out {''}</span> ):
                    (    <Link className="nav-link" to='/auth'>

                     Signin
                    </Link>

                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropDown />}
            </div>
        
            <Outlet />
        </Fragment>
    )
}
export default Navigation