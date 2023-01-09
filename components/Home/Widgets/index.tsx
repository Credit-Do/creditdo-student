import React from "react";

import { VStack } from "@chakra-ui/react";

import LearnWidget from "./LearnWidget";
import SaveWidget from "./SaveWidget";
import WorkWidget from "./WorkWidget";
import { Student } from "../../../types/user";

interface Props {
  studentData: Student
}

const Widgets: React.FC<Props> = ({ studentData }) => {
  return (
    <VStack spacing={8}>
      
      <LearnWidget
        classId={studentData.classId}
      />
      <WorkWidget
        userId={studentData.userId}
      />
      <SaveWidget />
    </VStack>
  );
};

export default Widgets;
