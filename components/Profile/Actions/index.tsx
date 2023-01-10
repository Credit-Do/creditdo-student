import React from 'react'

import { VStack } from '@chakra-ui/react'

import Action from './Action'
import { actions } from './actions'


const Actions : React.FC = () => {
  return (
    <VStack
        w='100%'
        px={4}
        spacing={0}
    >
        {
            actions.map((action, index) => (
                <Action 
                    key={action.href}
                    action={action}
                />
            ))
        }
    </VStack>
  )
}



export default Actions