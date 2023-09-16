import { useTranslation } from 'react-i18next';
import image from "../../images/santiago.jpg";
import pdf from "../../pdfs/santiago-ferreira-cv.pdf";
import { styles } from './About.styles.js';
import { Helmet } from 'react-helmet-async';

const AboutComponent = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>Santiago Ferreira - Acerca de Mí</title>
            </Helmet>
            <main style={styles.main}>
                <div style={styles.content}>
                    <h1 style={styles.h1}>{t('about')}</h1>
                    <div style={styles.divider}></div>
                    <p style={styles.p}>{t('aboutDescription')}</p>
                    <div style={styles.divider}></div>
                    <a href={pdf} target="_blank" rel="noreferrer" style={styles.a}>
                        {t('downloadCV')}
                    </a>
                </div>
                <div style={styles.imageSection}>
                    <img src={image} alt="Mi Foto" style={styles.image} />
                </div>
            </main>
        </>
    );
};

export default AboutComponent;