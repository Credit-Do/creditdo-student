import { Box, Button, Divider, Heading, Image, VStack, Text, HStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Formik, Field } from 'formik';

// Displays the login page
const Login: React.FC = () => {

  const router = useRouter();
  const [ pShow, setPShow ] = useState(false);
  const handlePShowClick = () => setPShow(!pShow);

  return (
    <VStack justifyContent="center" height="100vh" width="100%">
      <VStack
        justifyContent="space-evenly"
        borderRadius="3xl"
        padding="5%"
        spacing={5}
      >
        <VStack justifyContent="space-evenly">
          <Box boxSize="28">
            <Image
              src="/images/logo.png"
              pos="relative"
              alt='Logo'
            />
          </Box>
            <Heading>Sign In</Heading>
        </VStack>
        <VStack justifyContent="center">
      <Formik
        initialValues={{
            username: '',
            password: '',
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        // validate={validate}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start" padding={10}>
                <FormControl>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Field
                        as={Input}
                        id="username"
                        name="username"
                        type="username"
                        placeholder="Username"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <InputGroup size="md">
                    <Field
                        as={Input}
                        id="password"
                        name="password"
                        type={pShow ? 'text' : 'password'}
                        placeholder="Password"
                    />
                    <InputRightElement>
                        <IconButton
                        onClick={handlePShowClick}
                        aria-label="Visible Password"
                        icon={pShow ? <ViewIcon/> : <ViewOffIcon/>}
                        bg="white"
                        size="sm"
                        />
                    </InputRightElement>
                    </InputGroup>
                </FormControl>
                <Button type="submit" colorScheme="blue" width="xs">
                    Sign In
                </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </VStack>

      </VStack>
    </VStack>
  );
};

export default Login;
