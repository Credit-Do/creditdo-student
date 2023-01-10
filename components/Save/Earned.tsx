import React from 'react'
import { Box, HStack, Text, VStack } from '@chakra-ui/react'

import EarnedItem from './EarnedItem'

const giftCards = [
    {
        company: "Key Food Supermarkets",
        amount: 50,
        cardNumber: "********34564567",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Key_Food_logo.svg/2560px-Key_Food_logo.svg.png",
        bgColor: "red.500"
    },
    {
        company: "Associated Supermarket",
        amount: 50,
        cardNumber: "********34564567",
        logo: "https://www.opticalphusion.com/wp-content/uploads/2022/08/associated-hrz-logo-color.png",
        bgColor: "blue.500"
    }
]

const Earned = () => {
  return (
    <VStack
        w='100%'
        alignItems='flex-start'
        spacing={4}
    >
        <Text
            fontSize='xl'
            color='gray'
            fontWeight='semibold'
        >
            Earned $
        </Text>
        {
            giftCards.map((giftCard, index) => (
                <EarnedItem
                    key={index}
                    company={giftCard.company}
                    amount={giftCard.amount}
                    cardNumber={giftCard.cardNumber}
                    logo={giftCard.logo}
                    bgColor={giftCard.bgColor}
                />
            ))
        }
    </VStack>
  )
}

export default Earned