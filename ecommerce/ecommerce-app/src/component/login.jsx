
import { Flex,  Input, Checkbox,Stack, Link, Button, Icon, Text, Center,Alert,AlertIcon,Box,Image,AlertTitle,AlertDescription} from '@chakra-ui/react';
import { useState } from 'react';
import  axiosInstance  from '../config/config';
import {useDispatch} from "react-redux"
import user_types from '../redux/auth/types';
import { useNavigate } from 'react-router-dom';
import { SiNike } from 'react-icons/si';
import logotext from "../assests/logo.png"
import { useEffect } from 'react';
import { userLogin } from '../redux/middleware/userauth';
function Login(){

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const[status,setStatus] = useState(false)
  const [alert,setAlert] = useState(false)

  const [user,setUser] = useState({
    username :"",
    password :""
  })


  function inputHandler(event){
    const {name,value} = event.target;

    setUser({
      ...user,
      [name]:value
    })

  }

  async function login() {
    if(!user.username || !user.password){
      return setAlert(true)
    }
    const isAuth = await dispatch(userLogin(user))
    console.log(isAuth)
    if(isAuth.status){
      return navigate("/",{state:{user:isAuth.data},replace:true})
    }
    return setStatus(true)
  }


  return(
            
            
    <Flex direction={"column"} bgColor={"#fff"} w={"400px"} h={"600px"} py={"10px"} mt={"10px"} borderColor={"#DFDFDF"} borderWidth={"1px"}>
        <Flex h={"110px"} justifyContent={"center"} alignItems={"center"} flexDir="column" gap={3} mt={"50px"} mb="60px">
             <Image src={logotext} minH="200px" h="200px" />
        </Flex>
        
        <Center flexDir={"column"} w={"400px"} justifyContent={"center"} mt="20x" alignItems={"center"}>
           <Input name={"username"} onChange={inputHandler} pl="10px" fontFamily="helvetica" type={"text"} border="1px solid #DFDFDF" fontSize={"sm"} bgColor={"white"} w={"350px"} h={"45px"} mb={"20px"} placeholder={"Username"}></Input>
            <Input name={"password"} onChange={inputHandler} pl="10px" fontFamily="helvetica" type={"password"} border="1px solid #DFDFDF" fontSize={"sm"} bgColor={"white"} w={"350px"} h={"45px"} mb={"20px"} placeholder={"Password"}></Input>
            {alert?
            <Center>
            <Alert status='error' color={"black"} bgColor="#FED7D7" alignItems='center'
              justifyContent='center'
               textAlign='center' w={"350px"} h="50px">
              <AlertIcon boxSize={5} color="red"  />
              Please Fill Your Username and Password 
            </Alert>
            </Center>
            :
            null
            }
             {status?
            <Center>
            <Alert status='error' color={"black"} bgColor="#FED7D7" alignItems='center' zIndex={2}
              justifyContent='center'
               textAlign='center' w={"350px"} h="50px">
              <AlertIcon boxSize={5} color="red" />
              Wrong Username or Password !
            </Alert>
            </Center>
            :
            null
            }

            
            <Flex W="350px" mt="15px">
            <Text color="#999498" fontSize={"12px"} fontFamily="helvetica">By logging in, you agree to Easy Kicks</Text>  
           <Text color="#003334" fontSize={"12px"} fontFamily="helvetica"  cursor="pointer" ml="5px">Privacy Policy</Text>
           <Text color="#999498" fontSize={"12px"} fontFamily="helvetica" ml="5px">and</Text>  
           </Flex>
           <Text mb="20px" color="#003334" fontSize={"12px"} fontFamily="helvetica" display={"inline"} cursor="pointer" ml="5px">Term of Use</Text>
            <Button bgColor={"#003334"} onClick={login} fontWeight="bold" fontFamily="helvetica" color={"#fff"} fontSize={"14px"} marginTop={"10px"} w={"350px"} h={"45px"} cursor={"pointer"} > Log In</Button>
          <Flex mt={"20px"}>
          <Text color="#999498" fontWeight={"500"}>Not a Member ?</Text> 
          <Link href='/register'  variant={"unstyled"}><Text fontWeight={"500"} ml="5px"color={"#003334"}>Join Us</Text></Link>
          </Flex>
        </Center>

        
    </Flex>


)
  }
      export default Login;