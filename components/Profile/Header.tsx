import React from 'react'

import { Image, VStack, Text } from '@chakra-ui/react'

const Header : React.FC = () => {
  return (
    <VStack
        spacing={0}
    >
        <Image 
            src={`https://api.multiavatar.com/jasonhedman.png`}
            h='120px'
            w='120px'
            rounded='full'
            border='4px white solid'
            mb={2}
            alt={'avatar'}
        />
        <Text
            fontSize='2xl'
            fontWeight='bold'
            color='white'
        >
            Erica L.
        </Text>
        <Text
            fontSize='lg'
            color='white'
            fontWeight='semibold'
        >
            Ms. Garcia&apos;s Class
        </Text>
    </VStack>
  )
}

export default Header