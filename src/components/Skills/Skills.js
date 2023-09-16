import { useTranslation } from 'react-i18next';
import { styles } from "./Skills.styles.js";
import htmlIcon from "../../svgs/html5.svg";
import cssIcon from "../../svgs/css3.svg";
import jsIcon from "../../svgs/javascript.svg";
import gitIcon from "../../svgs/git.svg";
import githubIcon from "../../svgs/github.svg";
import nodeIcon from "../../svgs/nodejs.svg";
import reactIcon from "../../svgs/react.svg";
import expressIcon from "../../svgs/express.svg";
import mongoIcon from "../../svgs/mongodb.svg";
import { Helmet } from 'react-helmet-async';

const SkillsComponent = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>Santiago Ferreira - Aptitudes</title>
            </Helmet>
            <main style={styles.main}>
                <div>
                    <h1 style={styles.title}>{t('skills')}</h1>
                    <p style={styles.subtitle}>{t('skillsDescription')}:</p>
                </div>
                <div style={styles.skillsIcons}>
                    <div style={styles.navLink}>
                        <a href="https://www.w3.org/html/" target="_blank" rel="noopener noreferrer" style={styles.anchor}>
                            <img src={htmlIcon} alt="HTML5" className="skill-icon" style={styles.skillIcon} />
                        </a>
                        <p>HTML</p>
                    </div>
                    <div style={styles.navLink}>
                        <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer" style={styles.anchor}>
                            <img src={cssIcon} alt="css3" className="skill-icon" style={styles.skillIcon} />
                        </a>
                        <p>CSS</p>
                    </div>
                    <div style={styles.navLink}>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" style={styles.anchor}>
                            <img src={jsIcon} alt="javascript" className="skill-icon" style={styles.skillIcon} />
                        </a>
                        <p>JAVASCRIPT</p>
                    </div>
                    <div style={styles.navLink}>
                        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" style={styles.anchor}>
                            <img src={gitIcon} alt="git" className="skill-icon" style={styles.skillIcon} />
                        </a>
                        <p>GIT</p>
                    </div>
                    <div style={styles.navLink}>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={styles.anchor}>
                            <img src={githubIcon} alt="github" className="skill-icon" style={styles.darkIcons} />
                        </a>
                        <p>GITHUB</p>
                    </div>
                    <div style={styles.navLink}>
                        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" style={styles.anchor}>
                            <img src={nodeIcon} alt="nodejs" className="skill-icon" style={styles.skillIcon} />
                        </a>
                        <p>NODE.JS</p>
                    </div>
                    <div style={styles.navLink}>
                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" style={styles.anchor}>
                            <img src={reactIcon} alt="reactjs" className="skill-icon" style={styles.skillIcon} />
                        </a>
                        <p>REACT.JS</p>
                    </div>
                    <div style={styles.navLink}>
                        <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" style={styles.anchor}>
                            <img src={expressIcon} alt="express" className="skill-icon" style={styles.darkIcons} />
                        </a>
                        <p>EXPRESS.JS</p>
                    </div>
                    <div style={styles.navLink}>
                        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" style={styles.anchor}>
                            <img src={mongoIcon} alt="mongoDB" className="skill-icon" style={styles.skillIcon} />
                        </a>
                        <p>MONGODB</p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default SkillsComponent;