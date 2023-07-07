import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'
import menu from '../Images/menu.svg';
import exit from '../Images/exit.svg';
import moon from '../Images/moon.svg';
import sun from '../Images/sun.svg';
import ellipsis from '../Images/ellipsis.svg';
import './Navbar.css'

export default function Navbar() {

    const [mode, setMode] = useState(true);
    const [theme, setTheme] = useState('darkMode')
    const [hamBar, setHambar] = useState(false)

    useEffect(() => {
        document.body.classList.toggle('darkMode', theme === 'darkMode');
        document.body.classList.toggle('lightMode', theme === 'lightMode');
    }, [theme])

    const toggleMode = () => {
        if (theme === 'darkMode') {
            setTheme('lightMode')
            setMode(false)
        } else if (theme === 'lightMode') {
            setTheme('darkMode')
            setMode(true)
        }
    }

    const toggleHambar = () => {
        if (window.matchMedia('(max-width: 1370px)').matches) {
            if (hamBar === false) {
                setHambar(true)
            } else if (hamBar === true) {
                setHambar(false)
            }
        }
    }

    const closeMenu = () => {
        setHambar(false)
    }


    return (
        <div className="navbar">
            <div className="container-navbar">
                <div className="logo-container">
                    <a href="/" className="logo">CHAI<span>REDUX</span></a>
                </div>
                <img id="mobile-cta" className={`mobile-menu ${hamBar ? 'hide' : 'show'}`} src={menu} alt="Open Navigation" onClick={() => toggleHambar()} />

                <nav>
                    <img id="mobile-exit" className={`mobile-menu-exit ${hamBar ? 'show' : 'hide'}`} src={exit} alt="Close Navigation" onClick={() => toggleHambar()} />

                    <div className={`nav-div ${hamBar ? 'show' : 'hide'}`}>

                        <ul className={`nav-one`}>
                            <li><a href="/" onClick={() => closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Home</a></li>
                            <li><a href="/chai" onClick={() => closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Chai</a></li>
                            <li><a href="/anime" onClick={() => closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Anime</a></li>
                        </ul>

                        <div className='line-break'>
                            <div></div>
                        </div>

                        {/* <ul className={`nav-two`}>
                            <li><a href="/business" onClick={() => closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Business</a></li>
                            <li><a href="/technology" onClick={() => closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Technology</a></li>
                            <li><a href="/entertainment" onClick={() => closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Entertainment</a></li>
                        </ul> */}

                        {/* <ul className={`nav-three`}>
                            <li><a href="/sport " onClick={() => closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Sport </a></li>
                            <li><a href="/gaming" onClick={() => closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Gaming</a></li>
                            <li><a href="/music" onClick={() => closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Music</a></li>
                        </ul> */}

                        <ul className={`nav-four`}>
                            <li><a href="/beauty" onClick={() => closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Beauty</a></li>
                            <li><a href="/science" onClick={() => closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Science</a></li>
                            <li><a href="/food" onClick={() => closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Food</a></li>
                            <li><div>1000</div></li>
                        </ul>
                    </div>

                    <div className='ellipsis-container'>
                        <img className={`ellipsis ${hamBar ? 'hide' : 'show'}`} src={ellipsis} alt="Open Navigation" onClick={() => toggleHambar()} />
                    </div>

                    <div className='sun-moon'>
                        <img className={`sun ${mode ? 'show' : 'hide'}`} onClick={() => toggleMode()} src={sun} alt="Dark Mode" />
                        <img className={`moon ${mode ? 'hide' : 'show'}`} onClick={() => toggleMode()} src={moon} alt="Light Mode" />
                    </div>
                </nav>
            </div>
        </div>
    )
}