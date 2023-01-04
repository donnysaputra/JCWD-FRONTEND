import { Input,Box,Button,Flex,Image, Divider,Text,Icon, Alert,AlertIcon } from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import InstagramLogo from "../assets/Instagram_logo.svg.png"
import { AiFillFacebook } from "react-icons/ai"
import { axiosInstance } from "../config/config";
import { useState } from "react";
import user_types from "../redux/auth/types";
import { useSelector , useDispatch } from "react-redux";

export default function Login() {
    const dispatch = useDispatch();

    let navigate = useNavigate()
    const [user, setUser] = useState({
        username : "",
        password : ""
    })

    const [status, setStatus] = useState(false)

    // async function Login() {
    //  return  await axiosInstance.get("/users/", {params : user}).then((res) => {
    //     res.data.length ? navigate("/",{ state : { user :res.data[0] } }) : setStatus(true)
    //   })
    // }

    async function Login() {
        const res =  await axiosInstance.get("/users/", {params : user})
        const userData = res.data[0]

        dispatch({
            type: user_types.USER_LOGIN,
            payload: userData
        })
        
        localStorage.setItem("user_data", JSON.stringify(userData))

        userData ? navigate("/",{ state : { user :res.data[0] }, replace: true }) : setStatus(true)


    }

    function inputHandler(event) {
        const {name,value} = event.target

        setUser({
            ...user,
            [name] : value
        })

    }

    return (
        <>
        <Flex flexDir="column" gap={7}>
        <Box>
        <Flex py={2} gap="2" alignItems={"center"} flexDir="column"  borderWidth={"2px"} w="350px" h={"400px"}
        fontSize="sm" 
        >
        <Box>
        <Image mt={"10"} mb="7" src={InstagramLogo} h={"auto"} w={"175px"} maxW={"175px"}></Image>
        </Box>
            <Input name="username" onChange={inputHandler}  fontSize="sm"  w={"258px"} h="36px"  placeholder="Phone number, username, or email" />
            <Input name="password" onChange={inputHandler}  fontSize="sm" w={"258px"} h="36px" placeholder="Password" type={"password"}/>
            <Button  fontSize="sm" onClick={Login} colorScheme={"facebook"} w={"258px"} h="36px" >Log in</Button>
            <Flex w={"258px"} h="36px" alignItems={"center"} gap="4">
            <Divider orientation="horizontal"/>
            <Text color={"GrayText"} fontWeight={"light"} >OR</Text>
            <Divider orientation="horizontal"/>
            </Flex>
            <Link to={"//www.facebook.com"} >
            <Flex color={"facebook.500"} my={2} justifyContent="center" flexDir="row" alignContent={"center"} gap="1">
            <Icon  boxSize={6} as={AiFillFacebook} /> 

            <Flex  flexWrap="wrap" justifyContent="center" alignContent={"center"}>
            <Text fontWeight={"semibold"} >Log in with Facebook</Text>

            </Flex>
            </Flex>
            </Link>

            <Text fontSize={"xs"}>Forgot password?</Text>
        </Flex>
            
            {status ? 
    <Alert status='error' zIndex={2} variant="top-accent" >
        <AlertIcon />
        wrong username/password
    </Alert>
     :
  null    
    }
        </Box>

        <Button bgColor={"#FAFAFA"} borderRadius="0" variant="unstyled" 
        borderWidth="2px" fontSize={"sm"}  
        cursor={"default"}
        fontWeight="light"
        w={"100%"}>Don't have an account? <Link to={"/register"} > <Text display={"inline"} fontWeight="bold" color="#0095F6">Sign up</Text></Link></Button>
        </Flex>
     
         
        </>

    ) 
}