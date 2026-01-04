import { useState } from 'react';
import hamburgerIcon from '../assets/icon-hamburger.svg';
import logoIcon from '../assets/logo.svg';
import closeIcon from '../assets/icon-close.svg';

export const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={`menuMobile ${isMenuOpen ? 'activeMobileMenu' : ''}`}>
                <img 
                    src={hamburgerIcon} 
                    className={`menuMobile--hamburger ${isMenuOpen ? 'hidden' : 'visible'}`} 
                    alt="Hamburger menu icon" 
                    onClick={handleToggleMenu}
                    style={{ cursor: 'pointer' }}
                />
                <img 
                    src={closeIcon} 
                    className={`menuMobile--close ${isMenuOpen ? 'visible' : 'hidden'}`} 
                    alt="Close menu icon" 
                    onClick={handleToggleMenu}
                    style={{ cursor: 'pointer' }}
                />
                <img src={logoIcon} className="menuMobile--logo" alt="Logo" />
                <div></div>
                <ul className={`menuMobile--items ${isMenuOpen ? 'visible' : 'hidden'}`}>
                    <li>HOME</li>
                    <li>SHOP</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className={`overlay ${isMenuOpen ? 'visible' : 'hidden'}`} onClick={handleToggleMenu}></div>
        </>
    );
}