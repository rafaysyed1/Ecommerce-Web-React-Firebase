import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as  CrownLogo} from '../../assets/crown.svg'
import './Navigation.styles.scss'

const Navigation = () => {
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
                    <Link className="nav-link" to='/auth'>
                     Signin
                    </Link>
                </div>
            </div>

            <Outlet />
        </Fragment>
    )
}
export default Navigation