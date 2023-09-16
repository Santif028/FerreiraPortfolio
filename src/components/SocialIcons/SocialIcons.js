import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {styles} from "./SocialIcons.styles.js";

const SocialIconsComponent = () => {
    const handleMouseEnter = (event) => {
        event.target.style.backgroundColor = 'orange';
    };

    const handleMouseLeave = (event) => {
        event.target.style.backgroundColor = 'transparent';
    };

    return (
        <div style={styles.div}>
            <IconButton
                href="https://www.instagram.com/santi_edl/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconButton}
                onMouseEnter={handleMouseEnter} // Manejar el evento onMouseEnter
                onMouseLeave={handleMouseLeave} // Manejar el evento onMouseLeave
            >
                <InstagramIcon />
            </IconButton>
            <IconButton
                href="https://www.linkedin.com/in/santiago-ferreira-679640244/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconButton}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <LinkedInIcon />
            </IconButton>
            <IconButton
                href="https://github.com/Santif028"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconButton}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <GitHubIcon />
            </IconButton>
        </div>
    );
};

export default SocialIconsComponent;