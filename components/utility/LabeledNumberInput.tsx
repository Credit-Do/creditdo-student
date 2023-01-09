import React from 'react'

import { Flex, Text, Input, NumberInput, NumberInputField, InputGroup, InputLeftAddon } from '@chakra-ui/react';

interface Props {
    value: number | undefined;
    label: string;
    placeholder: string;
    setValue: (value: number) => void;
    leftAddon?: string;
}

const LabeledNumberInput: React.FC<Props> = ({ value, label, placeholder, setValue, leftAddon }) => {
  return (
    <Flex
        direction='column'
        gap={2}
        w='100%'
    >
        <Text>
            {label}
        </Text>
        <NumberInput
            value={value}
            onChange={(valueString) => setValue(Number(valueString))}
            
        >
            <InputGroup>
                {
                    leftAddon && (
                        <InputLeftAddon
                            pointerEvents='none'
                            fontSize='1.2em'
                        >
                            {leftAddon}
                        </InputLeftAddon>
                    )
                }
                
                <NumberInputField 
                    placeholder={placeholder}
                    
                />
            </InputGroup>
        </NumberInput>
    </Flex>
  )
}

export default LabeledNumberInput