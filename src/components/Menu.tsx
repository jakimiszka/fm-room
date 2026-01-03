import hamburgerIcon from '../assets/icon-hamburger.svg';
import logoIcon from '../assets/logo.svg';

export const Menu = () => {
    return (
        <div className="menuMobile">
            <img src={hamburgerIcon} alt="Hamburger menu icon" />
            <img src={logoIcon} alt="Logo" />
            <div></div>
        </div>
    );
}