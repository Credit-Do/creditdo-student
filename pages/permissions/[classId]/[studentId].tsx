import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import useGrantStudentPermission from '../../../hooks/useGrantStudentPermission';

const Permissions = () => {
    const router = useRouter()
    const { classId, studentId } = router.query;
    const { granted, granting, grantPermission } = useGrantStudentPermission();
    useEffect(() => {
        if (classId && studentId) {
            grantPermission(classId, studentId);
        }
    }, [classId, grantPermission, studentId]);

    if (granted) {
        <Heading>Granted!</Heading>
    }
    if (granting) {
        <Heading>Granting...</Heading>
    }
    return (
        <Heading>Welcome to Credit Do!</Heading>
    )
}

export default Permissions