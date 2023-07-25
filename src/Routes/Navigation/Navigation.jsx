import { Fragment,  useContext } from "react"
import { Outlet} from "react-router-dom"
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import { signOutUser } from '../../Utils/Firebase/Firebase.utils'
import { useSelector } from "react-redux"

import CartIcon from "../../Components/Cart-Icon/Cart-Icon.component"
import CartDropDown from "../../Components/Cart-DropDown/CartDropDown.component"

import {
    NavigationContainer,
    LogoContainer,
    NavLinkContainer,
    NavLink
} from './Navigation.styles.jsx'
import { selectCurrentUser } from "../../store/user/user.selector"
import { selectIsCartOpen } from "../../store/cart/cart.selector"

const Navigation = () => {
   const currentUser =  useSelector(selectCurrentUser);   
   console.log("User after the state changed is : ",currentUser)
    
   const isCartOpen = useSelector(selectIsCartOpen)
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className="logo" />

                </LogoContainer>

                <NavLinkContainer>
                    <NavLink to='/shop'>
                        Shop
                    </NavLink>
                    {currentUser ? (
                        <NavLink as = 'span' onClick={signOutUser}>
                            {' '}
                            Sign Out {''}</NavLink>) :
                        (<NavLink to='/auth'>

                            Signin
                        </NavLink>

                        )}
                    <CartIcon />
                </NavLinkContainer>
                {isCartOpen && <CartDropDown />}
            </NavigationContainer>

            <Outlet />
        </Fragment>
    )
}
export default Navigation