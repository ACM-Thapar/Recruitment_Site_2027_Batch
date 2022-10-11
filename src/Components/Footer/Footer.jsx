import React from 'react'
import './Footer.css'
import {BsInstagram, BsGithub, BsLinkedin, BsDiscord} from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>

            Designed by ACM Thapar 💙

                <div className='social-icons'>
                <a href='https://www.instagram.com/acmthapar'><BsInstagram size={25} style={{ color: '#757575' }}/></a>
                <a href='https://discord.gg/tFY6hVSbuC'><BsDiscord size={25} style={{ color: '#757575' }}/></a>
                <a href='https://github.com/ACM-Thapar'><BsGithub size={25} style={{ color: '#757575' }}/></a>
                <a href='https://www.linkedin.com/company/thapar-acm-student-chapter'><BsLinkedin size={25} style={{ color: '#757575' }}/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer