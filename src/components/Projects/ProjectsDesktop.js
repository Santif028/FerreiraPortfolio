import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { styles } from "./Projects.styles.js";
import projectsData from "./ProjectsData.js";

const ProjectsDesktop = () => {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    return (
        <div style={styles.main}>
            <section style={styles.projectList}>
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        style={styles.projectItem}
                        onClick={() => handleProjectClick(project)}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            style={styles.projectImage}
                        />
                        {t(project.title)}
                    </div>
                ))}
            </section>
            <section style={styles.projectDetails}>
                {selectedProject ? (
                    <div style={styles.selectedProjectDetails}>
                        <h2 style={styles.projectTitle}>{t(selectedProject.title)}</h2>
                        <img
                            src={selectedProject.imageFull}
                            alt={selectedProject.title}
                            style={styles.projectImageFull}
                        />
                        <aside style={styles.projectTags}>
                            <p>{t('year')}: {selectedProject.year}</p>
                            <p>{t('tags')}: {selectedProject.tags.join(", ")}</p>
                            <p>
                                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" style={styles.anchor}>
                                    GitHub Link{" "}
                                </a>
                            </p>
                            <p>
                                <a href={selectedProject.deployLink} target="_blank" rel="noopener noreferrer" style={styles.anchor}>
                                    {t('deploy')} Link{" "}
                                </a>
                            </p>
                        </aside>
                        <p style={styles.projectDescription}>{t(`projectDescriptions.${selectedProject.title}`)}</p>
                    </div>
                ) : (
                    <p>{t('selectProject')}</p>
                )}
            </section>
        </div>
    )
}

export default ProjectsDesktop