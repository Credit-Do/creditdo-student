import React from "react";

import { VStack, Text } from "@chakra-ui/react";

interface Props {
    amount: number;
    title: string;
}
  
const InfoDisplay: React.FC<Props> = ({ amount, title }) => {
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

export default InfoDisplay;