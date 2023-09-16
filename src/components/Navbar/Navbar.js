
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import usa from "../../images/estados-unidos.png";
import arg from "../../images/argentina.png";
import { styles } from "./Navbar.styles.js";
import DropdownMenu from "./DropdownMenu";
import NormalMenu from "./NormalMenu";

const NavbarComponent = () => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [isMobile, setIsMobile] = useState(false);

    const displayMenu = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        displayMenu();
        window.addEventListener('resize', displayMenu);
        return () => {
            window.removeEventListener('resize', displayMenu);
        };
    }, []);

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
        setCurrentLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
    };

    const renderFlagIcon = () => {
        if (currentLanguage === 'es') {
            return <img src={arg} alt="USA Flag" style={styles.lngFlag} />;
        } else {
            return <img src={usa} alt="Argentina Flag" style={styles.lngFlag} />;
        }
    };

    return (
        <nav>
            
            {isMobile ? (
                <DropdownMenu toggleLanguage={toggleLanguage} renderFlagIcon={renderFlagIcon} />
            ) : (
                <NormalMenu toggleLanguage={toggleLanguage} renderFlagIcon={renderFlagIcon} />
            )}
        </nav>
    );
};

export default NavbarComponent;