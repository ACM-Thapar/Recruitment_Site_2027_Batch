import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';
import Logo from './../../Assests/logo.png'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='header'>

            <div className='container'>

                {/* <h2 className='primary'>ACM</h2> */}
                <img src={Logo} className='logo' alt="ACM Logo"/>


                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='home' smooth='true' duration={500}>Home</Link>
                    </li>
                    <li>
                    <Link to='timeline' smooth='true' duration={500}>Timeline</Link>
                    </li>
                    <li>
                    <Link to='faqs' smooth='true' duration={500}>FAQs</Link>
                    </li>
                </ul>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#333' }} />) : (<FaBars size={20} style={{ color: '#333' }} />)}

                </div>
            </div>


        </div>
    )
}

export default Navbar