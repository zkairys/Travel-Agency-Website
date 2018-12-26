import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <header>
            <nav>
                <div className="">
                    <Link className="" to="/"></Link>
                    <ul className="">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                    </ul>
                </div>
            </nav>
            <Link className="mobile-menu js-toggle-menu" to="#">
                <span></span>
                <span></span>
                <span></span>
            </Link>


        </header >

    )
}

export default withRouter(Navbar)


