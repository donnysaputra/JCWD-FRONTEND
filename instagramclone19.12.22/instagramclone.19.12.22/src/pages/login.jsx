import  { Center,Flex,Box,Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import ContentCard from "../components/contentCard";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import {axiosInstance} from "../config/config.js"
import InstagramLogin from "../assets/ig-login.png"
import Login from "../components/login";

export default function LoginPage() {

return ( 
    <>
    <Box bgColor={"#FAFAFA"} minW={821} minH={"100vh"}  >
    <Center gap={8} flexWrap="wrap" paddingY={"14"} minH={"100vh"}>
        <Flex display="inline-flex" flexDir={"column"} >
        <Image src={InstagramLogin} width="100%" h="100%" />
        </Flex>

        <Flex display="inline-flex" flexDir={"column"}>
        <Login/>
        </Flex>
    </Center>
    </Box>
    </>
)
}