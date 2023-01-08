import React from "react";

import { Text, VStack, HStack } from "@chakra-ui/react";

import Widget from "./Widget";

const info: InfoProps[] = [
  {
    amount: 10,
    title: "Hours \n Worked",
  },
  {
    amount: 2,
    title: "Events \n Worked",
  },
  {
    amount: 1342,
    title: "LBs of Food \n Collected",
  },
];

const WorkWidget: React.FC = () => {
  return (
    <Widget title="Work" href="/work" bg="orange.300">
      <HStack spacing={6}>
        {info.map((info, index) => (
          <InfoDisplay key={index} {...info} />
        ))}
      </HStack>
    </Widget>
  );
};

interface InfoProps {
  amount: number;
  title: string;
}

// function newLineText(text:string) {
//   return
// }

const InfoDisplay: React.FC<InfoProps> = ({ amount, title }) => {
  return (
    <VStack spacing={0} flex={1}>
      <Text
        textAlign="center"
        fontSize="2xl"
        fontWeight="bold"
        color="whiteAlpha.900"
      >
        {amount.toLocaleString()}
      </Text>
      <Text
        textAlign="center"
        fontSize="sm"
        color="whiteAlpha.800"
        as="span"
        fontWeight="semibold"
        whiteSpace="pre-line"
      >
        {title}
      </Text>
    </VStack>
  );
};

export default WorkWidget;
