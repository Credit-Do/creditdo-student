import React from 'react'
import { 
    VStack, 
    Text, 
    IconButton, 
    Avatar, 
    useDisclosure,
    Skeleton, 
} from '@chakra-ui/react'

import useUserData from '../../hooks/useUserData'
import EditModal from './EditModal'

const teacher = 'Ms. Garcia'

const Header: React.FC = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const userData = useUserData();

    if (!userData) {
        return <Skeleton />
    }

    const {
        firstName,
        lastName,
        profilePicture,
    } = userData;

    const avatarSize = 'xl'
    
    return (
        <>
            <EditModal 
                isOpen={isOpen}
                onClose={onClose}
                userData={userData}
            />
            <VStack
                spacing={2}
            >
                <IconButton 
                    aria-label='Edit Profile' 
                    colorScheme='orange.500' 
                    onClick={onOpen}
                    size={avatarSize}
                >
                    <Avatar
                        name={`${firstName} ${lastName}}`}
                        src={profilePicture}
                        size={avatarSize}
                        border='4px white solid'
                    />
                </IconButton>
                <Text
                    fontSize='2xl'
                    fontWeight='bold'
                    color='white'
                >
                    {firstName} {lastName}
                </Text>
                <Text
                    fontSize='lg'
                    color='white'
                    fontWeight='semibold'
                >
                    {`${teacher}'s Class`}
                </Text>
            </VStack>
        </>
    )
}

export default Header