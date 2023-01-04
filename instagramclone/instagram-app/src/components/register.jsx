import { Button, Center, Flex, Input,Text,Image,Box } from "@chakra-ui/react";

function RegisterPage() {
    return(
        <Center>
            <Flex direction={"columns"}>
                <Image>Logo</Image>
                <Text>Sign up to see photos and videos from your friends</Text>
                <Button>Log in with Facebook</Button>
                <Box>OR</Box>
                <Input type={"text"} placeholder={"Mobile Number or Email"}></Input>
                <Input type={"text"} placeholder={"Mobile Number or Email"}></Input>
                <Input type={"text"} placeholder={"Mobile Number or Email"}></Input>
                <Input type={"password"} placeholder={"Mobile Number or Email"}></Input>
                <Text>People who use our service may have uploaded your contact information to Instagram</Text><Text>Learn More</Text>
                <Text>By signing up, you agree to our</Text><Text>Terms , Privacy Policy</Text><Text>and</Text><Text>Cookies Policy</Text>
            </Flex>
        </Center>
    )
}
export default RegisterPage();