import React from 'react'

import {
    Button, 
    Drawer, 
    DrawerBody, 
    DrawerCloseButton, 
    DrawerContent, 
    DrawerFooter, 
    DrawerHeader, 
    DrawerOverlay, 
    Text, 
    Input, 
    InputGroup,
    InputLeftElement,
    VStack
} from '@chakra-ui/react'
import useCreateGoal from '../../../hooks/useCreateGoal';
import LabeledInput from '../../utility/LabeledInput';
import LabeledNumberInput from '../../utility/LabeledNumberInput';
import LabeledDateInput from '../../utility/LabeledDatePicker';

interface Props {
    userId: string;
    isOpen: boolean;
    onClose: () => void;
}

const CreateGoal: React.FC<Props> = ({ userId, isOpen, onClose }) => {

    const {
        item,
        setItem,
        cost,
        setCost,
        currentAmount,
        setCurrentAmount,
        targetDate,
        setTargetDate,
        createGoal
    } = useCreateGoal(userId);

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            size='md'
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create New Goal</DrawerHeader>
                <DrawerBody>
                    <VStack
                        spacing={4}
                    >
                        <LabeledInput 
                            label='What item do you want to save for?'
                            placeholder='Enter item'
                            value={item}
                            setValue={setItem}
                        />
                        <LabeledNumberInput 
                            label='How much does it cost?'
                            placeholder='Enter amount'
                            value={cost}
                            setValue={setCost}
                            leftAddon='$'
                        />
                        <LabeledNumberInput
                            label='How much do you have now?'
                            placeholder='Enter amount'
                            value={currentAmount}
                            setValue={setCurrentAmount}
                            leftAddon='$'
                        />
                        <LabeledDateInput 
                            label='When do you want to have it by?'
                            setValue={setTargetDate}
                            placeholder='Enter date'
                        />
                    </VStack>
                </DrawerBody>

                <DrawerFooter>
                    <Button 
                        variant='outline' 
                        mr={3} 
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button colorScheme='blue'>Save</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CreateGoal