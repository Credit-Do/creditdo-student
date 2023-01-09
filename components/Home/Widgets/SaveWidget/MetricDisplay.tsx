import React from 'react'

import { 
  VStack,
  HStack,
  Icon,
  Progress,
  Text
} from '@chakra-ui/react'

import { IconType } from 'react-icons'

interface Props {
    title: string;
    valueFilled: number;
    valueTotal: number;
    icon: IconType;
}
  
  const MetricDisplay: React.FC<Props> = ({ title, valueFilled, valueTotal, icon }) => {
    return (
      <HStack
        w='100%'
        spacing={4}
      >
        <Icon
          as={icon}
          color="white"
          w={10}
          h={10}
          bg='whiteAlpha.400'
          p={2}
          rounded='full'
        />
        <VStack
          flex={1}
        >
          <Progress
            w='100%'
            value={valueFilled / valueTotal * 100}
            rounded='full'
            size='sm'
          />
          <HStack
            w='100%'
            justifyContent='space-between'
          >
            <Text
                color="whiteAlpha.800"
            >
              {title}
            </Text>
            <Text
                color="whiteAlpha.800"
                alignItems='center'
            >
              <Text
                  fontSize='lg'
                  as="span"
                  fontWeight='bold'
              >
                ${valueFilled}
              </Text> / ${valueTotal}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    )
}

export default MetricDisplay