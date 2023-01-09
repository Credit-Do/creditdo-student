import { useState } from 'react';

import { Student, User } from '../types/user';

const useEditProfilePicture = (studentData: Student) => {

    const [profilePicture, setProfilePicture] = useState<string>(studentData.profilePicture);

    const randomizeProfilePicture = () => {
        setProfilePicture(`https://api.multiavatar.com/${Math.random().toString(8).substring(2)}.png`)
    }

    // this will eventually be replaced with a call to the database
    const saveProfilePicture = async () => {
        
    }

    return {
        profilePicture,
        randomizeProfilePicture,
        saveProfilePicture
    }
}

export default useEditProfilePicture;