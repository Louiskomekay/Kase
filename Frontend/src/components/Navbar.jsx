import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { KaseLogo } from '../utils/Logo'

const Navbar = () => {
    return (
        <Wrapper>
            <div className='logoIcon'>
                <Link to='/'><KaseLogo /></Link>
            </div>

            <ul>
                <li className='navLink'> <NavLink to='/'>Home</NavLink> </li>
                <li className='navLink'> <NavLink to='/'>About</NavLink> </li>
                <li className='navLink'> <NavLink to='/'>Products</NavLink> </li>
                <li className='navLink'> <NavLink to='/'>Orders</NavLink> </li>
            </ul>

            <div>
                <div><Link to='/Login'>Login</Link></div>
            </div>
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.nav`

`