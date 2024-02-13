import { useEffect, useState } from 'react';

const useMobileApp = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 576;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
    return width <= breakPoint;
};

export default useMobileApp;
