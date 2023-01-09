import {Flex,Box,Input,Button, Text,Link,Image,Icon,Center,FormControl,FormHelperText } from '@chakra-ui/react';
import { useState } from 'react';
import{AiFillFacebook} from"react-icons/ai"
import axiosInstance from "../config/config.js"
import { Navigate, useNavigate } from 'react-router-dom';
import logo from "../assests/logo.png"
import {useFormik, yupToFormErrors} from "formik"
import * as Yup from "yup"
import YupPassword from 'yup-password';
  export default function Register() {
    YupPassword(Yup);
    const navigate = useNavigate()

    // const [user,setUser] = useState({
    //     id : 0,
    //     name :"",
    //     email:"",
    //     username:"",
    //     password :"",
    //     avatar_url :""
    // })

    const formik = useFormik({
        initialValues:{
            id : 0,
            name :"",
            email:"",
            username:"",
            password :"",
            avatar_url :""
        },
        validationSchema: Yup.object().shape({
            email : Yup.string().email("*ini bukan email"),
            password: Yup.string().min(10,"*min 10 digit")
            .minLowercase(1,"*min 1 huruf kecil")
            .minUppercase(1,"*min 1 huruf besar")
            .minNumbers(1,"*min 1 angka")
        }),
        onSubmit:(async ()=> {
            if(!formik.values.name || !formik.values.email || !formik.values.username || !formik.values.password ) return alert("Please fill your data!")
            const res = await axiosInstance.post("users",formik.values)
             alert("Anda berhasil registrasi")
             navigate("/login")

        })
    })

    // function inputHandler(event){
    //     const{name,value} = event.target;

    //     setUser({
    //         ...user,
    //         [name]:value
    //     })

    // }

    // async function addUser() {
      
        
    // }
        return(
            
            <Flex direction={"column"} bgColor={"#fff"} w={"400px"} h={"630px"} py={"10px"} mt="0px" borderColor={"#DFDFDF"} borderWidth={"1px"}>
        <Flex h={"110px"} justifyContent={"center"} alignItems={"center"} flexDir="column" gap={3} mt={"50px"} mb="20px">
             <Image src={logo} h="200px" />
        </Flex>
        
        <Center flexDir={"column"} w={"400px"} justifyContent={"center"} mt="40px" alignItems={"center"}>
            <FormControl>
           <Input name={"email"} onChange={(e)=>{formik.setFieldValue("email",e.target.value)}} pl="10px" fontFamily="helvetica" type={"text"} border="1px solid #DFDFDF" fontSize={"sm"} bgColor={"white"} w={"350px"} h={"45px"} mb={"20px"} placeholder={"Email Address"}></Input>
            <FormHelperText>
            {formik.errors.email}
            </FormHelperText>
            </FormControl>
            <Input name={"name"} onChange={(e)=>{formik.setFieldValue("name",e.target.value)}} pl="10px" fontFamily="helvetica" type={"text"} border="1px solid #DFDFDF" fontSize={"sm"} bgColor={"white"} w={"350px"} h={"45px"} mb={"20px"} placeholder={"Name"}></Input>
            <Input name={"username"} onChange={(e)=>{formik.setFieldValue("username",e.target.value)}} pl="10px" fontFamily="helvetica" type={"text"} border="1px solid #DFDFDF" fontSize={"sm"} bgColor={"white"} w={"350px"} h={"45px"} mb={"20px"} placeholder={"Username"}></Input>
            <FormControl>
            <Input name={"password"} onChange={(e)=>{formik.setFieldValue("password",e.target.value)}} pl="10px" fontFamily="helvetica" type={"password"} border="1px solid #DFDFDF" fontSize={"sm"} bgColor={"white"} w={"350px"} h={"45px"} mb={"20px"} placeholder={"Password"}></Input>
            <FormHelperText>
            {formik.errors.password}
            </FormHelperText>
            </FormControl>
            <Flex w="350px" mt="0px">
            <Text color="#999498" fontSize={"12px"} fontFamily="helvetica">By creating an account, you agree to Nike's</Text>  
           <Text color="#003334" fontSize={"12px"} fontFamily="helvetica"  cursor="pointer" ml="5px">Privacy Policy</Text>
           <Text color="#999498" fontSize={"12px"} fontFamily="helvetica" ml="5px">and</Text>  
           </Flex>
           <Text mb="20px" color="#003334" fontSize={"12px"} fontFamily="helvetica" display={"inline"} cursor="pointer" ml="5px">Term of Use</Text>
            <Button bgColor={"#003334"} onClick={formik.handleSubmit} fontWeight="bold" fontFamily="helvetica" color={"#fff"} fontSize={"14px"}  w={"350px"} h={"45px"} cursor={"pointer"} > Register</Button>
            <Flex mt={"5px"}>
          <Text color="#999498" fontWeight={"500"}>Are you a Member ?</Text> 
          <Link href='/login'  variant={"unstyled"}><Text fontWeight={"500"} ml="5px"color={"#003334"}>Log In</Text></Link>
          </Flex>
         
        </Center>

        
    </Flex>

            
            
        )
  }