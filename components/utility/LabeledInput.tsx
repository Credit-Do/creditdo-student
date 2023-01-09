import React from 'react'

import { Flex, Text, Input } from '@chakra-ui/react';

interface Props {
    value: string | undefined;
    label: string;
    placeholder: string;
    setValue: (value: string) => void;
}

const LabeledInput: React.FC<Props> = ({ value, label, placeholder, setValue }) => {
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
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
        />
    </Flex>
  )
}

export default LabeledInput