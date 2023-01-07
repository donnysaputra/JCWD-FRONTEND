
import Navbar from "../component/navbar";
import {useSelector} from "react-redux"
import { useState } from "react";
import axiosInstance from "../config/config";
import { useEffect } from "react";
import { Grid,Center,Image, Flex, GridItem ,Box,Button,Text} from "@chakra-ui/react";
import Shoes from "../component/shoes";
import { useLocation, useNavigate } from "react-router-dom";

import Loading from "../component/loading";
import AddProduct from "../component/addproduct";

function HomePage(){
    const navigate = useNavigate()
    const [shoes,setShoes] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const location = useLocation()
    const [search,setSearch]=useState("")

    const userSelector = useSelector((state)=> state.auth);

    async function fetchShoes(){
        const res = await axiosInstance.get("shoes")
        setShoes([...res.data])
     
    }
    
   
  
    useEffect(() =>{
       
        setTimeout(()=>{
            setIsLoading(!isLoading)
            
        },50)
        setSearch(location?.state?.dataSearch)
        fetchShoes()       
        console.log(location?.state?.dataSearch)
    },[])
    return(
        <>
        {
            isLoading?
            <Loading/>
            :
            <>
            
        <Navbar user={userSelector}></Navbar>
         <Grid  gap={"50px"} flexDir="rows" paddingX="30px" templateColumns="repeat(3,1fr)" marginTop="30px" w="100%" h="100%" >
                    
                {
                    shoes.map((val,idx)=>{
                        if(val.name.toLowerCase().includes(search?.toLocaleLowerCase()))
                        return(
                            <Shoes key={idx} data={val}/>
                        )
                    })
                }

         </Grid>
      
       
            </>

        }
       </>





      
    )
}

export default HomePage;
