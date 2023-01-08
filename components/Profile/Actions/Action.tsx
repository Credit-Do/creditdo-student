import React from 'react'

import Link from 'next/link';

import { HStack, Icon, Text } from '@chakra-ui/react'

import { Action } from './actions'

interface Props {
    action: Action
}

const Action: React.FC<Props> = ({ action }) => {

    const { href, text, icon } = action;

    return (
        <Link
            href={href}
            style={{ width: '100%' }}
        >
            <HStack
                w='100%'
                borderBottomColor='whiteAlpha.500'
                borderBottomWidth='1px'
                spacing={6}
                p={6}
            >
                <Icon 
                    as={icon}
                    color='white'
                    h={6}
                    w={6}
                />
                <Text
                    fontSize='lg'
                    color='white'
                    fontWeight='semibold'
                >
                    {text}
                </Text>
            </HStack>
        </Link>
    )
}

export default Action