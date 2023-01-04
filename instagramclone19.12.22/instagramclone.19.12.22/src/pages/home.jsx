import  { Center,Flex,Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ContentCard from "../components/contentCard";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import {axiosInstance} from "../config/config.js"
export default function HomePage(props) {
    let navigate = useNavigate();
    const userSelector = useSelector((state) => state.auth)

const [posts,setPosts] = useState([])
const { state } = useLocation();

const fetchPosts = async ()=> {
    await axiosInstance.get("posts").then((res)=> {
        setPosts(res.data)
    })
    
}

useEffect(()=> {
    fetchPosts();
    // console.log(state);
    setTimeout(() => {
        // if(!(state) ) 
        // navigate("/login") 
    }, 10);
   
},[])



return ( 
    <>
    <Box bgColor={"#FAFAFA"}  minW={821} minH={"100vh"}>
    <Navbar user={userSelector} />
    <Center gap={10} paddingY={"14"} >
        <Flex display="inline-flex" flexDir={"column"}>
            {
                posts.map((val,idx)=> {
                    return (
                    <ContentCard user={userSelector} key={idx} data={val} />
                    )
                })
            }
        </Flex>
        <Flex display="inline-flex" alignSelf="baseline">
            <SideBar user={userSelector} />
        </Flex>
    </Center>
    </Box>
    </>
)
}