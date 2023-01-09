import React from 'react'

import { Heading, HStack, theme } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons';
import { BiDotsVerticalRounded } from 'react-icons/bi';
interface Props {
  weekNumber: number;
  lessonSelected: boolean;
  onDownload: () => void;
  onMore: () => void;
}

const WeekHeader : React.FC<Props> = ({ weekNumber, lessonSelected, onDownload, onMore }) => {
  return (
    <HStack
      direction="row"
      alignItems="center"
      borderRadius={1}
      w='100%'
      justifyContent='space-between'
    >
      <Heading
        size='md'
        color={lessonSelected ? 'orange.500' : 'black'}
      >
        Week {weekNumber}
      </Heading>
      {
        lessonSelected && (
          <HStack>
          <DownloadIcon 
            onClick={onDownload}
            cursor='pointer'
            color='orange.500'
          />
          <BiDotsVerticalRounded 
            onClick={onMore}
            cursor='pointer'
            color={theme.colors.orange[500]}
          />
        </HStack>
        )
      }
      
    </HStack>
  )
}

export default WeekHeader