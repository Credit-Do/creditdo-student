import { useUserContext } from '../../contexts/UserContext';

const useStudentData = () => {

    const { studentData } = useUserContext();

    return studentData;
}

export default useStudentData;