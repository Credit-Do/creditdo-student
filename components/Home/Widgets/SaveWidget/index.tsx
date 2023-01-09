import React from 'react'

import { VStack } from '@chakra-ui/react'

import { BsPiggyBankFill } from 'react-icons/bs'
import { FaRegHandshake } from 'react-icons/fa'

import Widget from '../Widget'
import MetricDisplay from './MetricDisplay'
import useSaveAmounts from '../../../../hooks/useSaveAmounts'

interface Props {
  userId: string
}

const SaveWidget : React.FC<Props> = ({ userId }) => {

  const { amountEarned, amountEarnedGoal, amountSaved, amountSavedGoal } = useSaveAmounts(userId);

  return (
    <Widget
        title="Save"
        href="/save"
        bg="green.300"
    >
      <VStack
        spacing={6}
      >
        <MetricDisplay
          title="Earned"
          valueFilled={amountEarned}
          valueTotal={amountEarnedGoal}
          icon={FaRegHandshake}
        />
        <MetricDisplay
          title='Saved'
          valueFilled={amountSaved}
          valueTotal={amountSavedGoal}
          icon={BsPiggyBankFill}
        />
      </VStack>
    </Widget>
  )
}

export default SaveWidget