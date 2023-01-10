import React from 'react'
import { Box, HStack, VStack, Text, Image } from '@chakra-ui/react';

interface Props {
    company: string;
    amount: number;
    cardNumber: string;
    logo: string;
    bgColor: string;
}


const EarnedItem: React.FC<Props> = ({company, amount, cardNumber, logo, bgColor}) => {
  return (
    <VStack
        bg={bgColor}
        borderRadius='xl'
        p={4}
        w='100%'
        alignItems='flex-start'
    >
        <Text
            color='white'
            fontSize='sm'
            fontWeight='semibold'
        >
            {company}
        </Text>
        <Text
            color='white'
            fontSize='24px'
            fontWeight='semibold'
            w='50%'
        >
            ${amount}
        </Text>
        <Text
            color='white'
            fontSize='xs'
            w='50%'
        >
            Total Balance
        </Text>
        <HStack
            justifyContent='space-between'
            w='100%'
        >   
            <HStack>
                <Text
                    color='white'
                    fontSize='sm'
                    w='50%'
                >
                    **** 
                </Text>
                <Text
                    color='white'
                    fontSize='sm'
                    w='50%'
                >
                    **** 
                </Text>
                <Text
                    color='white'
                    fontSize='sm'
                    w='50%'
                >
                    {cardNumber.substring(8,12)} 
                </Text>
                <Text
                    color='white'
                    fontSize='sm'
                    w='50%'
                >
                    {cardNumber.substring(12,16)}
                </Text>
            </HStack>
            <Image 
                src={logo} 
                alt={company}
                w={20}
            />
        </HStack>
    </VStack>
  )
}

export default EarnedItem