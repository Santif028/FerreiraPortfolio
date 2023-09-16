import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { styles } from "./Navbar.styles";
const NormalMenu = ({ toggleLanguage, renderFlagIcon }) => {
    const { t } = useTranslation();

    return (

        <div style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.navLink}>
                        {t('home')}
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/about" style={styles.navLink}>
                        {t('about')}
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/projects" style={styles.navLink}>
                        {t('projects')}
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/skills" style={styles.navLink}>
                        {t('skills')}
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/contact" style={styles.navLink}>
                        {t('contact')}
                    </Link>
                </li>
                <button style={styles.lngButton} onClick={toggleLanguage}>
                    {renderFlagIcon()}
                </button>
            </ul>


        </div>
    );
};

export default NormalMenu;
