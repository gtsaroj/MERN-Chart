
import React, { useState } from 'react'

const Login = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState();


    const HandleClick = () => setShow(!show);

    const submitHandler = () => { };


    return (
        <VStack spacing={5}>
            <FormControl id="E-mail" isRequired>
                <FormLabel>
                    Email
                </FormLabel>
                <Input
                    placeholder="Enter your Email"
                    color={"black"}
                    onChange={(e) => setEmail(e.target.value)}></Input>
            </FormControl>
            <FormControl id='Pass' isRequired>
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
            <Button
                colorScheme='blue'
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}>
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

export default Login