export const styles = {
    main: {
        display: "flex",
        justifyContent: "space-between",
        height: "100vh",
        padding: "20px",
    },
    mainMobile: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px",
    },
    projectList: {
        width: "40%",
        overflowY: "auto",
        borderRight: "1px solid yellow",
        padding: "10px",
    },
    projectItem: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
    },
    projectImage: {
        width: "6.25rem",
        height: "6.25rem",
        marginRight: "10px",
        borderRadius: "5px",
    },
    projectDetails: {
        display: "flex",
        width: "58%",
        padding: "15px",
        justifyContent: "center",
    },
    selectedProjectDetails: {
        display: "grid",
        gridTemplateAreas: `"title title" 
                            "image tags" 
                            "description description"`,
        gridTemplateRows: "4.5rem 15.8rem auto",
        gridTemplateColumns: "32rem auto"
    },
    MobileDetails: {
        display: 'flex',
        flexDirection: 'column',
    },
    projectImageFull: {
        gridArea: "image",
        width: "31.25rem",
        height: "15.625rem",
        marginRight: "10px",
        border: "1px solid yellow",
        borderRadius: "5px",
    },
    projectImageFullMobile: {
        gridArea: "image",
        width: "100%",
        marginRight: "10px",
        border: "1px solid yellow",
        borderRadius: "5px",
    },
    projectTitle: {
        gridArea: "title",
    },
    projectTags: {
        gridArea: "tags",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    projectDescription: {
        gridArea: "description",
        maxWidth: "31.25rem",
        fontSize: "1.2rem",
    },
    anchor: {
        color: "#8EA6FC",
        textDecoration: "none",
    },
    divider: {
        borderBottom: "1px solid yellow",
    }
};
