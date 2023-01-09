import { Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const NotLoggedIn = () => {
  return (
    <VStack>
        <Text>
            Not Logged In
        </Text>
        <Text>
            Please log in to access the app
        </Text>
        <Button>
            Log In
        </Button>
    </VStack>
  )
}

export default NotLoggedIn