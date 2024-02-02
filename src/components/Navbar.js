import { Link } from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../components/Navbar.css';
import Button from 'react-bootstrap/Button';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const handleClick = () => {setClick(!click);};
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960 ){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect (() => {
        showButton()
    }, []);
  
window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="navbar">
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> 
                TRVL <FontAwesomeIcon icon={faGlobe} />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                    Services
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                    Products
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Sign-up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            console.log("Rendering Navbar");

        </div>
    </nav>
    </>
  )
}

export default Navbar
