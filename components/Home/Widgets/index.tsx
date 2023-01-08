import React from "react";

import { VStack } from "@chakra-ui/react";

import LearnWidget from "./LearnWidget";
import SaveWidget from "./SaveWidget";
import WorkWidget from "./WorkWidget";
import Link from "next/link";

const Widgets: React.FC = () => {
  return (
    <VStack spacing={8} w="100">
      
      <LearnWidget />
      <WorkWidget/>
      <SaveWidget />
    </VStack>
  );
};

export default Widgets;
