import React from 'react'

import { HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface Props {
    icon: IconType,
    bg: string,
    desription: string,
    value: string,
    unit: string
}

const ImpactCard : React.FC<Props> = ({ icon, bg, desription, value, unit}) => {
  return (
    <HStack 
        bg={bg}
        borderRadius='xl'
        p={4}
        w='100%'
    >
        <Icon 
            as={icon}
            color='white'
            h='30px'
            w='30px'
        />
        <VStack
            flex={1}
            alignItems='flex-start'
            spacing={0}
        >
            <Text
                color='white'
                fontSize='xs'
                fontWeight='bold'

            >
                {desription}
            </Text>
            <HStack
                alignItems='flex-end'
            >
                <Text
                    fontSize='xl'
                    fontWeight='bold'
                    color='white'
                    lineHeight={1}
                    m={0}
                >
                    {value}
                </Text>
                <Text
                    fontWeight='semibold'
                    color='white'
                    fontSize='sm'
                    lineHeight={1}
                >
                    {unit}
                </Text>
            </HStack>
        </VStack>
        
    </HStack>
  )
}

export default ImpactCard