import React from 'react'

import { 
    Avatar, 
    Button, 
    Text, 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay, 
    VStack, 
    HStack
} from '@chakra-ui/react';

import useClockIn from '../../../hooks/useClockIn';
import { ArrowBackIcon, RepeatClockIcon, TimeIcon } from '@chakra-ui/icons';
import moment from 'moment';


interface Props {
    isOpen: boolean;
    onClose: () => void;
    eventId: string;
    userId: string;
}

const ClockInModal: React.FC<Props> = ({ isOpen, onClose, eventId, userId }) => {

    const {
        currentTime,
        isPaused,
        isClockedIn,
        clockIn,
        clockOut,
        pause,
        resume,
    } = useClockIn(userId, eventId);

    const currentTimeMoment = moment(currentTime)

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Button
                        leftIcon={<ArrowBackIcon />}
                        variant='ghost'
                        size='sm'
                        colorScheme='blue'
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                </ModalHeader>
                <ModalBody>
                    <VStack
                        spacing={8}
                    >
                        <TimeIcon 
                            boxSize={16}
                        />
                        <VStack>
                            <HStack
                                spacing={1}
                                alignItems='flex-end'
                            >
                                <Text
                                    fontSize='6xl'
                                    lineHeight={1}
                                    color='blackAlpha.700'
                                >
                                    {currentTimeMoment.format('h:mm')}
                                </Text>
                                <Text
                                    fontSize='xl'
                                    color='blackAlpha.600'
                                >
                                    {currentTimeMoment.format('A')}
                                </Text>
                            </HStack>
                            <Text
                                fontSize='xl'
                                color='blackAlpha.700'
                            >
                                {currentTimeMoment.format('ddd MM/DD/YYYY')}
                            </Text>
                        </VStack>
                    </VStack>
                </ModalBody>
                <ModalFooter
                    justifyContent='space-between'
                >
                    <Button
                        colorScheme={isPaused ? 'yellow' : 'orange'}
                        onClick={isPaused ? resume : pause}
                        disabled={!isClockedIn}
                    >
                        {isPaused ? 'Resume' : 'Pause'}
                    </Button>
                    <Button
                        colorScheme={isClockedIn ? 'red' : 'green'}
                        onClick={isClockedIn ? clockOut : clockIn}
                    >
                        {isClockedIn ? 'Clock Out' : 'Clock In'}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ClockInModal