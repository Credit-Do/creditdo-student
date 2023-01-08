import React from 'react'

import { 
    Avatar, 
    Button, 
    FormControl, 
    FormLabel, 
    Input, 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay, 
    VStack 
} from '@chakra-ui/react';

import useEditUserData from '../../hooks/useEditUserData';

import { UserData } from '../../types/user';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    userData: UserData
}

const EditModal: React.FC<Props> = ({ isOpen, onClose, userData }) => {

    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        profilePicture,
        randomizeProfilePicture,
        updateUser
    } = useEditUserData(userData);

    const onSave = async () => {
        await updateUser();
        onClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Profile</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack
                        spacing={8}
                    >
                        <VStack>
                            <Avatar
                                name={`${firstName} ${lastName}`}
                                src={profilePicture}
                                size='xl'
                            />
                            <Button
                                onClick={randomizeProfilePicture}
                            >
                                Randomize
                            </Button>
                        </VStack>
                        <FormControl
                            display='flex'
                            gap={4}
                        >
                            <VStack
                                spacing={0}
                                alignItems='flex-start'
                            >
                                <FormLabel>
                                    First Name
                                </FormLabel>
                                <Input 
                                    placeholder='First Name'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)} 
                                />
                            </VStack>
                            <VStack
                                spacing={0}
                                alignItems='flex-start'
                            >
                                <FormLabel>
                                    Last Name
                                </FormLabel>
                                <Input
                                    placeholder='Last Name'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </VStack>
                        </FormControl>
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <Button
                        colorScheme='orange'
                        onClick={onSave}
                    >
                        Save
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default EditModal