import React from 'react'
import { 
    VStack, 
    Text, 
    IconButton, 
    Avatar, 
    useDisclosure,
    Skeleton, 
} from '@chakra-ui/react'

import useStudentData from '../../hooks/student/useStudentData'
import EditModal from './EditModal'
import { formatStudentName, formatTeacherName } from '../../services/utils'
import useTeacherData from '../../hooks/teacher/useTeacherData'

const Header: React.FC = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const studentData = useStudentData();
    
    // later we will need to push this a level deeper because we need to get classId to get teacherId
    const teacherData = useTeacherData("1");

    if (!studentData) {
        return <Skeleton />
    }

    const studentName = formatStudentName(studentData);

    const avatarSize = 'xl'
    
    return (
        <>
            <EditModal 
                isOpen={isOpen}
                onClose={onClose}
                studentData={studentData}
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
                        name={studentName}
                        src={studentData.profilePicture}
                        size={avatarSize}
                        border='4px white solid'
                    />
                </IconButton>
                <Text
                    fontSize='2xl'
                    fontWeight='bold'
                    color='white'
                >
                    {studentName}
                </Text>
                <Text
                    fontSize='lg'
                    color='white'
                    fontWeight='semibold'
                >
                    {teacherData ? `${formatTeacherName(teacherData)}'s Class` : ''}
                </Text>
            </VStack>
        </>
    )
}

export default Header