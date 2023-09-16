import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { styles } from "./Header.styles.js";
import { Helmet } from "react-helmet-async";

const HeaderComponent = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>Santiago Ferreira - Inicio</title>
            </Helmet>
            <main style={styles.main}>
                <h1 style={styles.h1}>
                    {t('greeting')}&nbsp;
                    <span style={styles.span}>{t('name')}</span>&nbsp;
                    {t('profession')}
                </h1>
                <div style={styles.buttons}>
                    <Link to="/about" style={styles.navLink}>
                        {t('about')}
                    </Link>
                    <Link to="/projects" style={styles.navLink}>
                        {t('projects')}
                    </Link>
                    <Link to="/skills" style={styles.navLink}>
                        {t('skills')}
                    </Link>
                    <Link to="/contact" style={styles.navLink}>
                        {t('contact')}
                    </Link>
                </div>
            </main>
        </>
    );
};

export default HeaderComponent;
