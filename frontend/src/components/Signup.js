import { FormControl, FormLabel, VStack, Input, InputGroup, InputRightElement, Button, Show, } from '@chakra-ui/react'
import React, { useState } from 'react'
import useToast from '@chakra-ui/react'
import reactRouterDom, { useHistory } from "react-router-dom"
import axios from 'axios';

const Signup = () => {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [confirmPassword, setConfirmPassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();
    const [loading, setLoading] = useState(false);

    const history = useHistory()

    const toast = useToast();
    const HandleClick = () => setShow(!show);
    const HandleClick1 = () => setShow1(!show1);


    const postDetails = (pics) => {
        setLoading(true);

        if (pics === undefined) {
            toast({
                title: "please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "srx_Img");
            data.append("cloud_name", "roadside-coder");
            data.append("API Secret", "tB99x1rfliF-pO6ixt3CH5TqYGc");

            fetch("https://api.cloudinary.com/v1_1/roadside-coder/image/upload", {
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    setPic(data.url.toString());
                    console.log(data.url.toString());
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        } else {
            toast({
                title: "Please select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
    };

    const submitHandler = async () => { }


    return (
        <VStack spacing={5}>
            <FormControl id="first-name" isRequired>
                <FormLabel>
                    Name
                </FormLabel>
                <Input
                    placeholder="Enter your name"
                    color={"black"}
                    onChange={(e) => setName(e.target.value)}></Input>
            </FormControl>
            <FormControl id="Email" isRequired>
                <FormLabel>
                    Email
                </FormLabel>
                <Input
                    placeholder="Enter your Email"
                    color={"black"}
                    onChange={(e) => setEmail(e.target.value)}></Input>
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel> Password </FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        placeholder="Enter your password"
                        color={"black"}
                        onChange={(e) => setPassword(e.target.value)}>
                    </Input>
                    <InputRightElement width="4.5rem">
                        <Button
                            h="1.75rem"
                            size="sm"
                            onClick={HandleClick}>
                            {show ? "Hide" : "show"}

                        </Button>
                    </InputRightElement>
                </InputGroup>

            </FormControl>
            <FormControl id="confirmPassword" isRequired>
                <FormLabel> Confirm Password</FormLabel>
                <InputGroup>
                    <Input
                        type={show1 ? "text" : "password"}
                        placeholder="Enter your password"
                        color={"black"}
                        onChange={(e) => setConfirmPassword(e.target.value)}>
                    </Input>
                    <InputRightElement width="4.5rem">
                        <Button
                            h="1.75rem"
                            size="sm"
                            onClick={HandleClick1}>
                            {show1 ? "Hide" : "show"}

                        </Button>
                    </InputRightElement>
                </InputGroup>

            </FormControl>

            <FormControl id='pic'>
                <FormLabel>Upload Your picture</FormLabel>
                <Input
                    type='file'
                    p="1.5"
                    accept='image/*'
                    onChange={(e) => postDetails(e.target.files[0])} />



            </FormControl>
            Signup
            <Button
                colorScheme='blue'
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}
                isLoading={loading}
            >
                submit
            </Button>
            <Button variant="solid"
                colorScheme='red'
                width="100%"
                onClick={() => {
                    setEmail("guest@example.com");
                    setPassword("123456");
                }}>
                Get Guest User Credentials
            </Button>

        </VStack>
    )
}

export default Signup
