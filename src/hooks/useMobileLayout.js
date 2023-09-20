import { useState, useEffect } from "react";

export default function useMobileLayout() {
    const [isMobile, setIsMobile] = useState(false);

    const setMobile = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        setMobile();
        window.addEventListener('resize', setMobile);
        return () => {
            window.removeEventListener('resize', setMobile);
        };
    }, []);

    return { isMobile }
}