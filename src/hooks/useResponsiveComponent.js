import { useEffect, useState } from 'react';

export const useResponsiveComponent = () => {
    const [query, setQuery] = useState(window.innerWidth);

    
    useEffect(() => {
        window.addEventListener('load', () => {
            setQuery(window.innerWidth)
        });
        window.addEventListener('resize', () => {
            console.log(window.innerWidth)
            setQuery(window.innerWidth)
        });
        return () => {
            window.removeEventListener("load", () => {
                setQuery(window.innerWidth)
            })
            window.removeEventListener("resize", () => {
                setQuery(window.innerWidth)
            })
        }
    }, [query])
    console.log(query);
    return query;
};
