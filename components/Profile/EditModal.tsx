import React from 'react'

import { 
    Avatar, 
    Button, 
    Text, 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay, 
    VStack 
} from '@chakra-ui/react';

import useEditProfilePicture from '../../hooks/student/useEditProfilePicture';

import { Student } from '../../types/user';
import { formatStudentName } from '../../services/utils';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    studentData: Student
}

const EditModal: React.FC<Props> = ({ isOpen, onClose, studentData }) => {

    const {
        profilePicture,
        randomizeProfilePicture,
        saveProfilePicture
    } = useEditProfilePicture(studentData);

    const onSave = async () => {
        await saveProfilePicture();
        onClose();
    }

    const studentName = formatStudentName(studentData);

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
                                name={studentName}
                                src={profilePicture}
                                size='xl'
                            />
                            <Button
                                onClick={randomizeProfilePicture}
                            >
                                Randomize
                            </Button>
                        </VStack>
                        <Text>
                            {studentName}
                        </Text>
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