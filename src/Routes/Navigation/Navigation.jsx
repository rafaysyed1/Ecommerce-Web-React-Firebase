import { Fragment,  useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user-context"
import { signOutUser } from '../../Utils/Firebase/Firebase.utils'

import CartIcon from "../../Components/Cart-Icon/Cart-Icon.component"
import CartDropDown from "../../Components/Cart-DropDown/CartDropDown.component"
import { CartContext } from "../../contexts/cart-context"

import {
    NavigationContainer,
    LogoContainer,
    NavLinkContainer,
    NavLink
} from './Navigation.styles.jsx'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

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