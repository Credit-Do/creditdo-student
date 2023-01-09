import React from "react";

import { Flex, Skeleton } from "@chakra-ui/react";

import Header from "./Header";
import Widgets from "./Widgets";

import useStudentData from "../../hooks/useStudentData";

const Home = () => {

  const studentData = useStudentData();

  if (!studentData) {
    return <Skeleton />
  }

  return (
    <Flex direction="column" w="100%" gap={12} flex={1} justifyContent="center" p="">
      <Header 
        firstName={studentData.firstName}
        profilePicture={studentData.profilePicture}
      />
      <Widgets 
        studentData={studentData}
      />
    </Flex>
  );
};

export default Home;
