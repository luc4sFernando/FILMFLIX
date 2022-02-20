import { useEffect, useState } from 'react';

export const useResponsiveComponent = () => {
    const [query, setQuery] = useState("");

    useEffect(() => {
        function eventFunc() {
            setQuery(window.innerWidth);
        }
        window.addEventListener('load', eventFunc);
        window.addEventListener('resize', eventFunc);
        return () => {
            window.removeEventListener("resize", eventFunc)
            window.removeEventListener("resize", eventFunc)
        }
    }, [query]);
    console.log(query)
    return query;
};
