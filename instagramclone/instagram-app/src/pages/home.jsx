import  { Center,Flex,Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import ContentCard from "../components/contentCard";
import Navbar from "../components/navbar";
import { axiosInstance } from "../config/config";


export default function Home() {

const [post,setPost] = useState([])

function fetchPost(){
    axiosInstance.get("posts").then((res) => {
        setPost([...res.data])
    })
}

useEffect(()=>{
    fetchPost()
},[])

return ( 
    <>
    <Box bgColor={"#FAFAFA"}  minW={821}>
    <Navbar/>
    <Center paddingY={"20"} >
        <Flex display="inline-flex" flexDir={"column"}>
            {
                post.map((val,idx)=>{
                    return(
                        <ContentCard key={idx} data={val} setPost={setPost} fetchPost={fetchPost} />
                    )
                    
                })
            }
        </Flex>
    </Center>

    </Box>
    </>
)
}