import React from 'react'

import { Flex, Text, Input } from '@chakra-ui/react';

interface Props {
    label: string;
    placeholder: string;
    setValue: (value: Date) => void;
}

const LabeledDateInput: React.FC<Props> = ({ label, placeholder, setValue }) => {
  return (
    <Flex
        direction='column'
        gap={2}
        w='100%'
    >
        <Text>
            {label}
        </Text>
        <Input 
            onChange={(e) => setValue(new Date(e.target.value))}
            placeholder={placeholder}
            type='date'
        />
    </Flex>
  )
}

export default LabeledDateInput