import ProjectsDesktop from "./ProjectsDesktop.js";
import ProjectsMobile from "./ProjectsMobile.js";
import { Helmet } from 'react-helmet-async';
import useMobileLayout from '../../hooks/useMobileLayout';

const ProjectsComponent = () => {
    const { isMobile } = useMobileLayout();

    return (
        <>
            <Helmet>
                <title>Santiago Ferreira - Proyectos</title>
            </Helmet>
            <main>
                {isMobile ? (
                    <ProjectsMobile />
                ) : (
                    <ProjectsDesktop />
                )}
            </main>
        </>
    );
};

export default ProjectsComponent;