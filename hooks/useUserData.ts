import { useState, useEffect } from 'react';
import { defaultUserData } from '../data/user';

import { UserData } from '../types/user';

const useUserData = () => {
    const [userData, setUserData] = useState<UserData>();

    // this will eventually be replaced with a call to the database
    useEffect(() => {
        setUserData(defaultUserData)
    }, [])

    return userData;
}

export default useUserData;