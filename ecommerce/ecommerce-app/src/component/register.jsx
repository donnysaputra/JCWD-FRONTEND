import {Flex,Box,Input,Button, Text,Link,Image,Icon,Center,Divider, } from '@chakra-ui/react';
import { useState } from 'react';
import{AiFillFacebook} from"react-icons/ai"
import axiosInstance from "../config/config.js"
import { Navigate, useNavigate } from 'react-router-dom';
import logo from "../assests/logo.png"
  export default function Register() {

    const navigate = useNavigate()

    const [user,setUser] = useState({
        id : 0,
        name :"",
        email:"",
        username:"",
        password :"",
        avatar_url :""
    })

    function inputHandler(event){
        const{name,value} = event.target;

        setUser({
            ...user,
            [name]:value
        })

    }

    async function addUser() {
        if(!user.name || !user.email ||!user.username || !user.password ) return alert("Please fill your data!")
       const res = await axiosInstance.post("users",user)
        alert("Anda berhasil registrasi")
        navigate("/login")
        
    }
        return(
            
            <Flex direction={"column"} bgColor={"#fff"} w={"400px"} h={"630px"} py={"10px"} mt="10px" borderColor={"#DFDFDF"} borderWidth={"1px"}>
        <Flex h={"110px"} justifyContent={"center"} alignItems={"center"} flexDir="column" gap={3} mt={"50px"} mb="20px">
             <Image src={logo} h="200px" />
        </Flex>
        
        <Center flexDir={"column"} w={"400px"} justifyContent={"center"} mt="40px" alignItems={"center"}>
           <Input name={"email"} onChange={inputHandler} pl="10px" fontFamily="helvetica" type={"text"} border="1px solid #DFDFDF" fontSize={"sm"} bgColor={"white"} w={"350px"} h={"45px"} mb={"20px"} placeholder={"Email Address"}></Input>
            <Input name={"name"} onChange={inputHandler} pl="10px" fontFamily="helvetica" type={"text"} border="1px solid #DFDFDF" fontSize={"sm"} bgColor={"white"} w={"350px"} h={"45px"} mb={"20px"} placeholder={"Name"}></Input>
            <Input name={"username"} onChange={inputHandler} pl="10px" fontFamily="helvetica" type={"text"} border="1px solid #DFDFDF" fontSize={"sm"} bgColor={"white"} w={"350px"} h={"45px"} mb={"20px"} placeholder={"Username"}></Input>
            <Input name={"password"} onChange={inputHandler} pl="10px" fontFamily="helvetica" type={"password"} border="1px solid #DFDFDF" fontSize={"sm"} bgColor={"white"} w={"350px"} h={"45px"} mb={"20px"} placeholder={"Password"}></Input>
            <Flex w="350px" mt="15px">
            <Text color="#999498" fontSize={"12px"} fontFamily="helvetica">By creating an account, you agree to Nike's</Text>  
           <Text color="#003334" fontSize={"12px"} fontFamily="helvetica"  cursor="pointer" ml="5px">Privacy Policy</Text>
           <Text color="#999498" fontSize={"12px"} fontFamily="helvetica" ml="5px">and</Text>  
           </Flex>
           <Text mb="20px" color="#003334" fontSize={"12px"} fontFamily="helvetica" display={"inline"} cursor="pointer" ml="5px">Term of Use</Text>
            <Button bgColor={"#003334"} onClick={addUser} fontWeight="bold" fontFamily="helvetica" color={"#fff"} fontSize={"14px"}  w={"350px"} h={"45px"} cursor={"pointer"} > Register</Button>
         
         
        </Center>

        
    </Flex>

            
            
        )
  }