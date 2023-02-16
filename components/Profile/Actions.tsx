import React from 'react'

import Link from 'next/link';

import { Button, HStack, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from '@chakra-ui/react'

import { IconType } from 'react-icons';
import { FaCog, FaLock, FaPhoneAlt, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const actionsData: ActionProps[] = [
    {
        href: '/profile',
        icon: FaCog,
        text: 'Settings'
    },
    {
        href: '/profile',
        icon: FaLock,
        text: 'Privacy Policy'
    },
    {
        href: '/profile/support',
        icon: FaPhoneAlt,
        text: 'Get Support'
    },
    {
        href: '/profile/about',
        icon: FaInfoCircle,
        text: 'About'
    },
    {
        href: '/profile',
        icon: FaSignOutAlt,
        text: 'Log Out'
    }
]

const Actions: React.FC = () => {
    return (
        <VStack
            w='100%'
            px={4}
            spacing={0}
        >
            {
                actionsData.map((action, index) => (
                    <Action
                        key={index}
                        {...action}
                    />
                ))
            }
        </VStack>
    )
}

interface ActionProps {
    href: string;
    text: string;
    icon: IconType;
}


const Action: React.FC<ActionProps> = ({ href, text, icon }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { auth, user, loading, signOut } = useAuth()

    if (text === "Privacy Policy") {
        return (
            <Button
                bg='orange.400'
                padding={10}
                _hover={{ bg: 'none' }}
                onClick={onOpen}
            >
                <HStack
                    w='100%'
                    borderBottomColor='whiteAlpha.500'
                    borderBottomWidth='1px'
                    spacing={8}
                    py={6}
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
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Privacy Policy</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>
                                I love my privacy
                            </Text>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='orange' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Button>
        )
    }

    if (text === "Log Out") {
        return (
            <Button
                bg='orange.400'
                padding={10}
                _hover={{ bg: 'none' }}
                onClick={() => signOut()}
            >
                <HStack
                    w='100%'
                    borderBottomColor='whiteAlpha.500'
                    borderBottomWidth='1px'
                    spacing={8}
                    py={6}
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
            </Button>
        )
    }

    return (
        <Link
            href={href}
        >
            <HStack
                w='100%'
                borderBottomColor='whiteAlpha.500'
                borderBottomWidth='1px'
                spacing={8}
                py={6}
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




export default Actions