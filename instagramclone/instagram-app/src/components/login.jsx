import { Flex,Box, Center, Grid, GridItem,Image, Input} from "@chakra-ui/react";
import { InputGroup,Button,InputRightElement,Text} from "@chakra-ui/react";
import { useState } from "react";


function Login(){
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return(

   
        <Center>
          
                <Grid marginTop={"20px"} templateRows="0.5fr 0fr 0fr" gap={3}>
                    <GridItem border={"#1B1B1B"} bgColor={"#121212"} w={350} h={400}>
                        <Grid templateRows="1fr 2fr 0.5fr">
                            <GridItem  w={"100%"} h={"150px"} paddingTop={50}>
                               <Center> 
                                <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"} w={175} h={51}></Image>
                                </Center>
                            </GridItem>
                            <GridItem>
                                <Grid templateRows="repeat(5, 1fr)" gap={3}>
                                    <GridItem w={"100%"} h={38}  >
                                        <Input type={"text"} w={'268px'} fontSize={"sm"}  color={"white"} marginX={"40px"} variant={"unstyled"} placeholder={"Phone number,username,or email"}></Input>
                                    </GridItem>
                                   
                                    <GridItem w={"100%"} h={38} >
                                      <Center>
                                        <InputGroup size='md'>
                                            <Input
                                                pr='4.5rem'
                                                type={show ? 'text' : 'password'}
                                                placeholder='Enter password'
                                                w={'220px'}
                                                marginLeft={"40px"}
                                                fontSize={"sm"} 
                                                bgColor={"#121212"}
                                                color={"white"}
                                                variant={"unstyled"}
                                            />
                                            <InputRightElement width='4.5rem' marginRight={"40px"}>
                                                <Button h='100%' w={"70px"} bgColor={"#121212"}    variant={"unstyled"} onClick={handleClick}>
                                                {show ? 'Hide' : 'Show'}
                                                </Button>
                                            </InputRightElement>
                                            </InputGroup>
                                        </Center>
                                    </GridItem>
                                    
                                    <GridItem w={"100%"} h={38} >
                                        <Center>
                                            <Button bgColor ={'none'} w={'268px'} h={'30px'} marginX={"40px"} marginY={"4px"}>
                                                Log In
                                            </Button>
                                        </Center>
                                    </GridItem>
                                    <GridItem w={"100%"} h={38} >
                                        <Center>
                                            <Box w={"267.78px"} h={"15px"} >
                                                <Grid templateColumns={"2fr 1fr 2fr"}>
                                                    <GridItem paddingY={"19px"}><hr color="" marginTop={"19px"}></hr></GridItem>
                                                    <GridItem textAlign={"center"}><Text marginTop={"8.5px"}>OR</Text></GridItem>
                                                    <GridItem paddingY={"19px"}><hr color="white" marginTop={"19px"}></hr></GridItem>

                                                </Grid>
                                            </Box>
                                        </Center>
                                    </GridItem>
                                    <GridItem w={"100%"} h={38}  >
                                        <Grid templateColumns={"1fr 1fr"} textAlign={"center"}>
                                            <GridItem  w={"80px"} h={"18.89px"} marginLeft={"40px"}paddingLeft={"60px"} textAlign={"right"} ><Image  textAlign={"right"} w={"18.89px"} h={"18.89px"} src={"https://1.bp.blogspot.com/-43Onc5tyrNk/Xu2RFVCtCoI/AAAAAAAAGII/CiKsSA4g7rcfWy0bjNk2KoE2LVe3-5ffgCK4BGAsYHg/s1000/logo-facebook.png"}></Image></GridItem>
                                            <GridItem  w={"134.86px"} h={"18.89px"} marginRight = {"96px"}><Text fontSize={"sm"} > Log In with Facebook</Text></GridItem>
                                        </Grid>
                                    </GridItem>
                                </Grid>
                            </GridItem>
                            <GridItem></GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem border={"#1B1B1B"} bgColor={"#121212"} w={350} h={63}>
                        <Flex>
                        <Text color={"#E8F0FE"}> Don't have an account?</Text> 
                        <Text color={"#0095F6"} fontWeight={"bold"}> Sign Up</Text>
                        </Flex>
                        </GridItem>
                    <GridItem border={"#1B1B1B"} bgColor={"#121212"} w={350} h={102}></GridItem>
                    
                </Grid>
        </Center>
    

    )
}

export default Login;