import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { KaseLogo } from '../utils/Logo'
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { IoMenu } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    return (
        <Wrapper>
            <div className='nav-container'>
                <div className='logoIcon navbar-start'>
                    <Link to='/'><KaseLogo className='mainLogo' /></Link>
                </div>

                <div className='navbar-center'>
                    <ul>
                        <li className='navLink'> <NavLink to='/' className='link'>Home</NavLink> </li>
                        <li className='navLink'> <NavLink to='/About' className='link'>About</NavLink> </li>
                        <li className='navLink'> <NavLink to='/Products' className='link'>Products</NavLink> </li>
                        <li className='navLink'> <NavLink to='/Orders' className='link'>Orders</NavLink> </li>
                    </ul>
                </div>

                <div className='navbar-end'>
                    {/* Login */}
                    <div><Link to='/Login' className='link'>Login</Link></div>

                    {/* Theme setup */}
                    <div><BsMoonFill /></div>

                    {/* Cart link */}
                    <NavLink to='/Cart' className='link'>
                        <FiShoppingCart />
                    </NavLink>
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.nav`
    .nav-container {
        display: flex;
        justify-content: space-between;
        padding: .5rem 4rem;
        align-items: center;
    }

.navbar-center ul {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
}

.navbar-end {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
}

.mainLogo{
    width: 6rem;
}
`