import React from 'react'
import * as FaIcons from 'react-icons/fa'
//import * as FaIcons from 'react-icons/fa'

function socials() {
    return (
        <div className="socials-position">
            <div className="social-icon">
                <FaIcons.FaGithub/> - BQTH
            </div>

            <div className="social-icon">
                <FaIcons.FaInstagram/> - ThyartisParkway
            </div>

            <div className="social-icon">
                <FaIcons.FaLinkedinIn/> - Benjmin ten Hove
            </div>
        </div>
    )
}

export default socials
