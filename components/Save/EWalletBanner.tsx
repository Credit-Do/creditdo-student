import React from 'react'

import { Flex, Text } from '@chakra-ui/react'

export const bannerHeight = '70px';

const EWalletBanner = () => {
  return (
    <Flex
        position='fixed'
        alignItems='center'
        h={bannerHeight}
        top={0}
        left={0}
        w='100%'
        justifyContent='center'
        shadow='sm'
    >
        <Text
            fontWeight='bold'
            fontSize='lg'
        >
            eWallet
        </Text>
    </Flex>
  )
}

export default EWalletBanner