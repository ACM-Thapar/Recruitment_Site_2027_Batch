import React from 'react'
import './Footer.css'
import {BsInstagram, BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>

            Designed by ACM Thapar 💙

                <div className='social-icons'>
                <BsInstagram size={25} style={{ color: '#757575' }}/>
                <BsTwitter size={25} style={{ color: '#757575' }}/>
                <BsGithub size={25} style={{ color: '#757575' }}/>
                <BsLinkedin size={25} style={{ color: '#757575' }}/>
                </div>
            </div>
        </div>
    )
}

export default Footer