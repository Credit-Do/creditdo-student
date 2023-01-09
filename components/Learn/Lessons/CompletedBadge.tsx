import React from 'react'
import { Badge } from '@chakra-ui/react'

interface Props {
    completed: boolean
}

const CompletedBadge: React.FC<Props> = ({completed}) => {
    if (completed == true){
        return (
            <Badge colorScheme='green'>Completed</Badge>
        )
    }
    else{
        return (
            <Badge colorScheme='red'>Not Completed</Badge>
        )
    }
}

export default CompletedBadge