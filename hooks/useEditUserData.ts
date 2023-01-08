import { useState } from 'react';
import { UserData } from '../types/user';

const useEditUserData = (userData: UserData) => {

    const [firstName, setFirstName] = useState<string>(userData.firstName);
    const [lastName, setLastName] = useState<string>(userData.lastName);
    const [profilePicture, setProfilePicture] = useState<string>(userData.profilePicture);

    const randomizeProfilePicture = () => {
        setProfilePicture(`https://api.multiavatar.com/${Math.random().toString(8).substring(2)}.png`)
    }

    // this will eventually be replaced with a call to the database
    const updateUser = async () => {

    }

    return {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        profilePicture,
        randomizeProfilePicture,
        updateUser
    }
}

export default useEditUserData;