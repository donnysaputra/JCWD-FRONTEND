import { Button, Center, Flex, Input,Text,Image,Box,Icon, Divider,Link } from "@chakra-ui/react";
import logo from "../assets/Instagram_logo.svg.png"
import {AiFillFacebook} from"react-icons/ai"
import { useState } from "react";
import {axiosInstance} from "../config/config.js"
import { useDispatch } from "react-redux";
import user_types from "../redux/auth/types";

function Register() {

    const dispatch = useDispatch()
    const [user,setUser] =useState(
        {
            id: 0,
            email:"",
            username: "",
            password: "",
            name: "",
            avatar_url: ""
        }
    )
    


    function inputHandler(event){
        const {name,value} = event.target

        setUser({
            ...user,
            [name] : value
        })

    }

    async function addUser(){
        if(!user.email || !user.username || !user.password || !user.name ) return alert("Please fill your data!")

        const res = await axiosInstance.post("users",user)
        const userData = res.data
        console.log(userData)
        
        if(userData){
        dispatch({
            type: user_types.USER_LOGIN,
            payload: userData
        })
    }
    }


    return(
        <>
        
            <Flex direction={"column"} bgColor={"#fff"} w={"350px"} h={"630.98px"} py={"10px"} mt={"10px"} borderColor={"#DFDFDF"} borderWidth={"1px"}>
                <Flex h={"110px"} justifyContent={"center"} alignItems={"center"}>
                     <Image src={logo} w={"215px"} h={"81px"} mt={"15px"}/>
                </Flex>
                <Text  textAlign={"center"} fontWeight={"bold"} color={"#9A9A9A"} marginX={"40px"} fontSize={"17px"} mb={"10px"}>Sign up to see photos and videos from your friends.</Text>
                <Flex w={"350px"} justifyContent={"center"}>
                    <Button bgColor={"#0095f6"} color={"#fff"} fontSize={"14px"} marginTop={"10px"} w={"258px"} h={"32px"}><Icon as={AiFillFacebook}></Icon>Log in with Facebook</Button>
                </Flex>
                <Center gap={5} marginY={"10px"} marginX={"46px"}>
                    <Divider orientation="horizontal"></Divider>
                    <Box fontSize={"13px"} color="#9C9FA2" fontWeight={"bold"} >OR</Box>
                    <Divider orientation="horizontal"></Divider>
                </Center>
                <Center flexDir={"column"} w={"350px"} justifyContent={"center"}>
                    <Input name={"email"} onChange={inputHandler} type={"text"} fontSize={"sm"}bgColor={"#FAFAFA"} w={"258px"} h={"36px"} mb={"10px"}placeholder={"Mobile Number or Email"}></Input>
                    <Input name={"name"} onChange={inputHandler} type={"text"}  fontSize={"sm"} bgColor={"#FAFAFA"} w={"258px"} h={"36px"} mb={"10px"} placeholder={"Full Name"}></Input>
                    <Input name={"username"} onChange={inputHandler} type={"text"}  fontSize={"sm"} bgColor={"#FAFAFA"} w={"258px"} h={"36px"} mb={"10px"} placeholder={"Username"}></Input>
                    <Input name={"password"} onChange={inputHandler} type={"password"}  fontSize={"sm"} bgColor={"#FAFAFA"} w={"258px"} h={"36px"} mb={"10px"} placeholder={"Password"}></Input>
                    <Text textAlign={"center"} fontSize={"12px"} >People who use our service may have uploaded your contact information to Instagram</Text>
                    <Link>
                    <Text fontSize={"12px"} color={"blue"} display={"inline"}>Learn More</Text>
                    </Link>
                    <Text fontSize={"12px"}>By signing up, you agree to our</Text><Text fontSize={"12px"} display={"inline"}>Terms , Privacy Policy</Text><Text fontSize={"12px"}  display={"inline"}>and</Text><Text fontSize={"12px"}>Cookies Policy</Text>
                    <Button bgColor={"#0095f6"} color={"#fff"} onClick={addUser}fontSize={"14px"} marginTop={"10px"} w={"258px"} h={"32px"} marginBottom={"px"}>Sign up</Button>
               
                </Center>

                
            </Flex>
        
        </>
    )
}
export default Register;