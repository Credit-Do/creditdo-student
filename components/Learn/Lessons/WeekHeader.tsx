import React from 'react'

import { Stack, Heading } from '@chakra-ui/react'
interface Props {
  weekNumber: number;
}

const WeekHeader : React.FC<Props> = ({ weekNumber }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      borderRadius={1}
      px={1.5}
      py={0.25}
    >
      <Heading
        size='md'
      >
        Week {weekNumber}
      </Heading> 
    </Stack>
  )
}

export default WeekHeader