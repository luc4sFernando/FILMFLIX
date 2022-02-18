import { useEffect, useState } from 'react';

export const useResponsiveComponent = () => {
    const [query, setQuery] = useState(window.innerWidth);

    useEffect(() => {
        function eventFunc() {
            setQuery(window.innerWidth);
        }
        window.addEventListener('resize', eventFunc);
    }, [query]);
    return query;
};
