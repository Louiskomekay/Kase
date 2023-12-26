import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { KaseLogo } from '../utils/Logo'
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { IoMenu } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    return (
        <Wrapper>
            <nav className='nav-container'>
                <div className='menu-icon'><IoMenu /></div>
                <div className="nav-start">
                    <Link> < KaseLogo className='KaseLogo' /> </Link>
                </div>

                <ul className='nav-center'>
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                    <NavLink to='/About' className='nav-link'>About</NavLink>
                    <NavLink to='/Products' className='nav-link'>Products</NavLink>
                    <NavLink to='/Orders' className='nav-link'>Orders</NavLink>
                </ul>

                <div className='nav-end'>
                    <Link to='/Login' className='nav-end-item'>Login</Link>
                    <Link to='/Cart' className='nav-end-item'><FiShoppingCart /></Link>
                    <div className='nav-end-item'><BsSunFill /></div>
                </div>
            </nav>
        </Wrapper>
    )
}

export default Navbar

// STYLING
const Wrapper = styled.div`
.nav-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3.5rem;
    position: relative;
}

.menu-icon {
    display: none;
}

.KaseLogo {
    width: 7rem;
}

.nav-center, .nav-end {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-end {
    gap: 3rem;
}

.nav-center .nav-link, .nav-end .nav-end-item {
    display: block;
}

.nav-center .nav-link, .active {
    padding: .5rem 1rem;
    margin-right: 1.5rem;
    border-radius: var(--border-radius);
}

.nav-link.active {
    color: #F5FDFF;
    background: var(--Red);
}
`