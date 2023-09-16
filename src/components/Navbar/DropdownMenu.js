import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { styles } from "./Navbar.styles";
import toggler from "../../images/menu.png";

const DropdownMenu = ({ toggleLanguage, renderFlagIcon }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={styles.navbarMobile}>
      <div style={styles.buttons}>
        <button style={styles.lngButton} onClick={toggleLanguage}>
          {renderFlagIcon()}
        </button>
        <button onClick={toggleMenu} style={styles.buttonIcon}>
          <img src={toggler} alt="toggler" style={styles.menuIcon} />
        </button>
      </div>
      {isMenuOpen && (
        <ul style={styles.navListMobile}>
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
        </ul>
      )}
    </div>
  )
};

export default DropdownMenu;