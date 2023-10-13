import React from 'react'
import { Container, Box, Text, Tabs, TabList, TabPanel, TabPanels, Tab } from '@chakra-ui/react'
import Login from '../components/Login';
import Signup from '../components/Signup';

const Homepage = () => {
    return (
        <Container>
            <Box
                d='flex'
                justifyContent='center'
                padding={3}
                bg={'white'}
                w='100%'
                m="40px 0 15px 0px"
                borderRadius={"lg"}
                borderWidth={"1px"}

            >
                <Text
                    textAlign={"center"}
                    fontSize={"4xl"}
                    padding={4}
                    fontFamily={"Work sans"}
                    color={"black"}
                >Talk-A-Tive</Text>
            </Box>
            <Box bg={"white"}
                w={"100%"}
                padding={4}
                borderRadius={"lg"}
                borderWidth={"1px"}>
                <Tabs variant='soft-rounded' >
                    <TabList mb={3}>
                        <Tab w={"50%"}>Login</Tab>
                        <Tab w={"50%"}>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel
                            color={"black"}>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Box>

        </Container>
    )
}

export default Homepage
