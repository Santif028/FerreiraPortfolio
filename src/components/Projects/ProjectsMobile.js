import { useTranslation } from 'react-i18next';
import { styles } from "./Projects.styles.js";
import projectsData from "./ProjectsData.js";

const ProjectsMobile = () => {
    const { t } = useTranslation();


    return (
        <div style={styles.mainMobile}>
            {projectsData.map((project) => (
                <section style={styles.MobileDetails}>
                    <h2 style={styles.projectTitle}>{t(project.title)}</h2>
                    <img
                        src={project.imageFull}
                        alt={project.title}
                        style={styles.projectImageFullMobile}
                    />
                    <div style={styles.projectTags}>
                        <p>{t('year')}: {project.year}</p>
                        <p>{t('tags')}: {project.tags.join(", ")}</p>
                        <p>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={styles.anchor}>
                                GitHub Link{" "}
                            </a>
                        </p>
                        <p>
                            <a href={project.deployLink} target="_blank" rel="noopener noreferrer" style={styles.anchor}>
                                {t('deploy')} Link{" "}
                            </a>
                        </p>
                    </div>
                    <div style={styles.divider}></div>
                    <p style={styles.projectDescription}>{t(`projectDescriptions.${project.title}`)}</p>
                    <div style={styles.divider}></div>
                </section>
            ))}
        </div>
    )
}

export default ProjectsMobile;