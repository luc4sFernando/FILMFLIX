import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

export const useUserQueryLoggedIn = () => {
    const [queryUser, setQueryUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setQueryUser(user.email);
                console.log('aqui', user.email);
            } else {
                setQueryUser(null);
            }
        });
    }, []);

    return queryUser;
};
