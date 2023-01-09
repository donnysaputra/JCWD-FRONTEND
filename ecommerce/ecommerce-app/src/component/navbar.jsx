import { Flex,Image, Input,Icon, Avatar, Center, Menu, MenuList,MenuItem, MenuButton, Divider, Text, Button ,Box} from "@chakra-ui/react"

import {MdAddCircleOutline } from "react-icons/md";
import { FiPlusSquare} from "react-icons/fi";
import { RiMessengerLine, RiNurseFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import user_types from "../redux/auth/types.js"
import {useNavigate} from"react-router-dom"
import {SiNike} from "react-icons/si"
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./loading.jsx";
import logotext from "../assests/logotext.png"
export default function Navbar(props) {
 

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [search,setSearch] = useState('')
    const [selectava,setSelectedava] = useState(false)
    const [selectbtn,setSelectedbtn] = useState(false)
    const [isLoading,setIsLoading] = useState(false)


    useEffect(()=>{
      if(props?.user?.id){
          setSelectedava(true)
          setSelectedbtn(true)
      }else{
        setSelectedava(false)
        setSelectedbtn(false)
      }
      setIsLoading(false)
    },[])
 
    function logout() {
    
      setSelectedava(false)
      setSelectedbtn(false)
      dispatch({
        type : user_types.USER_LOGOUT
      })
      localStorage.clear()
      navigate("/")
    }

    function add(){
      navigate("/addproduct")
  }

  // function handlerSearch(event){
  //   const {name,value} = event.target;
  //   if(name === "search"){
  //     setSearch(value)
  //   }
  //   navigate('/',{state:{dataSearch:search}})
  //   console.log(search)
    
  // }
    return (
        <> 
        {
          isLoading?
          <Loading/>
          :
          <>
          <Flex w={"full"} h={"80px"} bgColor={"#F6F6F6"} justifyContent="space-between" paddingX="20px">
            <Image src={logotext} w="200px" h="40px" marginY={"20px"} marginLeft="15px" onClick={()=> {navigate("/")}}  sx={{
                _hover: {
                  cursor: "pointer",
                },}}></Image>
            <Input type="text" w={selectbtn? "900px":"820px"} h="50px" name ="search" onChange={(e)=>{navigate("/",{state:{value:e.target.value}})}}
            placeholder="Search" paddingLeft="10px" marginRight={selectbtn? "30px" : null} marginLeft={selectbtn? "40px" :null} marginY="15px" border="1px solid grey" borderRadius={"5px"}/> 
            {selectbtn?
            
            <Flex  gap={2}   justifyContent="space-between" alignContent={"center"}>
            <Button border={"1px solid grey"} h="40px" w={"120px"} marginY="20px" marginRight ="30px" bgColor={"#003334"} color="white"
              sx={{
                _hover: {
                  bgColor: "#999498",
                },}}
              onClick={add}
            >Add Product</Button>
            </Flex>
            :
            <Flex  gap={2}   justifyContent="space-between" alignContent={"center"}>
            <Button border={"1px solid grey"} h="40px" w={"100px"} marginY="20px" bgColor={"#003334"} color="white"
              sx={{
                _hover: {
                  bgColor: "#999498",
                },}}
              onClick={()=> {navigate("/login")}}
            >Login</Button>
            <Button border={"1px solid grey"} h="40px" w={"100px"} marginY="20px" bgColor={"#003334"} color="white"
            sx={{
              _hover: {
                bgColor: "#999498",
              },}}
              onClick={()=> {navigate("/register")}}
            >Register</Button>
            </Flex>
            }
           
            {selectava? 
             <Menu position="fixed" zIndex="3" isLazy>
             <MenuButton>
             <Avatar boxSize={55}  
             src={props?.user?.avatar_url}
             sx={{
             _hover: {
               cursor: "pointer",
             },
           }}/>
             </MenuButton>
                     <MenuList fontSize={"md"} bgColor="#FAFAFA" minW="200px" textAlign={"center"} borderRadius="10px">
                     <MenuItem fontSize={"15px"} pl="20px">Profile</MenuItem>
                     <MenuItem fontSize={"15px"} pl="20px">Saved</MenuItem>
                     <MenuItem fontSize={"15px"} pl="20px">Settings</MenuItem>
                     {/* <Link to={"/login"}>    */}
                     <MenuItem pl="20px" borderTop={"1px solid #E2E8F0"}
                     onClick={logout}
                     fontSize={"15px"}
                     >
                     Log Out
                     </MenuItem>
                     {/* </Link> */}
                     </MenuList>
             </Menu>
             :
             null
            }
           

            </Flex>
          </>
        }
    
        </>
    )
}