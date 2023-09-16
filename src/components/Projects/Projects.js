import { useState, useEffect } from "react";
import ProjectsDesktop from "./ProjectsDesktop.js";
import ProjectsMobile from "./ProjectsMobile.js";
import { Helmet } from 'react-helmet-async';

const ProjectsComponent = () => {
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