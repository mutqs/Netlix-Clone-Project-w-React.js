import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img
                className='nav__logo'
                src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
                alt='Netflix Logo'
            />
            <img
                className='nav__avatar'
                src="https://pbs.twimg.com/media/DmBraqkXcAA1Yco.jpg"
                alt='Netflix Avatar'
            />
        </div>

    )
}

export default Nav