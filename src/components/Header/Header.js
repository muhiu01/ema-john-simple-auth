import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
                {
                    user?.uid
                        ?
                        <button onClick={logOut}>Sign Out</button>
                        :
                        <>
                            <NavLink to="/login">Log in</NavLink>
                            <NavLink to="/signup">Sign Up</NavLink>
                        </>
                }

            </div>
        </nav>
    );
};

export default Header;