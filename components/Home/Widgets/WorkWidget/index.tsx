import React from "react";

import { HStack } from "@chakra-ui/react";

import Widget from "../Widget";
import InfoDisplay from "./InfoDisplay";

import useContributions from "../../../../hooks/useContributions";

interface Props {
  userId: string;
}

const WorkWidget: React.FC<Props> = ({ userId }) => {

  const contributions = useContributions(userId)

  return (
    <Widget title="Work" href="/work" bg="orange.300">
      <HStack spacing={3}>
        <InfoDisplay 
          title={'Hours\nWorked'}
          amount={contributions.reduce((acc, curr) => acc + curr.hours, 0)}
        />
        <InfoDisplay
          title={'Events\nWorked'}
          amount={contributions.length}
        />
        <InfoDisplay
          title={'Pounds\nCollected'}
          amount={contributions.reduce((acc, curr) => acc + curr.pounds, 0)}
        />
      </HStack>
    </Widget>
  );
};

export default WorkWidget;
