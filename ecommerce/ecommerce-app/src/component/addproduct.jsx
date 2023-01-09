import {Center,Flex,Grid,Text,Image,Input,Button,Select,option, InputRightAddon,Alert,AlertIcon} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import logotext from "../assests/logotext.png"
import axiosInstance from "../config/config";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
function AddProduct(props){

    const [edit,setEdit] =useState(false)
    const navigate = useNavigate()
    const [sepatu,setSepatu] = useState ([])
    const location = useLocation()
    // const data  = location.state.data
    const [alert,setAlert] = useState(false)
    const [shoes,setShoes] = useState({
    
        id : 0,
        name : "",
        price :0,
        brand:"",
        img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc7g5DWDOAp7pqzkLV6tSclMjZz8NSN7S9a2GzQnN5AVbDn8ohRBWV2CjnkyJSjk6tS4&usqp=CAU"
    })

    function inputHandler(event){
        const {name,value} = event.target;  

        setShoes({...shoes,
         [name]: value
        })
    }

    async function fetchShoes(){
        const res = await axiosInstance.get("shoes")
        setSepatu(res.data)
   
    }

    const newData ={
        id : 0,
        name : "",
        price :0,
        brand:"",
        img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc7g5DWDOAp7pqzkLV6tSclMjZz8NSN7S9a2GzQnN5AVbDn8ohRBWV2CjnkyJSjk6tS4&usqp=CAU"
 
    }
    useEffect(()=>{
            
            fetchShoes()
            if(location.state !== null){
            setShoes({...location.state.data})
            
        }
           
           
    },[])

    useEffect(()=>{
        navigate("/addproduct")
    },[])

    

   

    useEffect(()=>{
        if (shoes.img === ""){
            setShoes({
                ...shoes,
                ["img"] :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc7g5DWDOAp7pqzkLV6tSclMjZz8NSN7S9a2GzQnN5AVbDn8ohRBWV2CjnkyJSjk6tS4&usqp=CAU"
            })
        }
    },[shoes.img])
    
    
    async function addShoes(){
        if (!shoes.name || !shoes.price || !shoes.brand || !shoes.img) {
           return setAlert(true)
        }
        else if(sepatu.find((val)=>val.id === shoes.id)){
            return axiosInstance.patch("shoes/" + shoes.id,shoes).then(()=>{
                navigate("/")
            })
        }
        return  await axiosInstance.post("shoes",shoes).then(()=>{
            navigate("/")
        })
    }
    return(

        <Center marginY="0.5%" >
            <Flex flexDir={"column"} w="900px" minH={"600px"} h="600px" border="1px solid lightgrey" bgColor={"white"}>
              <Grid templateRows={"0.5fr 0.3fr"}  >
                    <Center>
                        <Image  src={logotext} w="300px" h="80px"  mt="30px"  />
                        
                    </Center>
                    <Center><Text fontSize="40px" fontFamily={"helvetica"} fontWeight="bold">{!shoes.id? "Add Product" : "Edit Product"}</Text></Center>
                  
                    <Grid templateColumns={"2fr 4fr"} gap={1} marginY="0px" borderTop={"1px solid lightgrey"} pt="40px" >
                        <Image ml="20px" src={shoes.img} minW="350px" minH="350px" w="350px" h="350px" ></Image>
                        <Grid templateRows={"0.8fr 0.8fr 0.8fr 1fr 0.2fr 0.5fr"}  w="500px" h="350px"  >
                            <Input marginX={"20px"} name="name" type="text" onChange={inputHandler} w="480px" h="40px" pl="15px" border="1px solid lightgrey" placeholder="Product Name" value={shoes.name}></Input>
                            <Input marginX={"20px"} name="brand" type="text" onChange={inputHandler} w="480px" h="40px" pl="15px" border="1px solid lightgrey" placeholder="Product Brand" value={shoes.brand}></Input>
                            <Input marginX={"20px"} name="price" type="text" onChange={inputHandler} w="480px" h="40px" pl="15px" border="1px solid lightgrey" placeholder="Product Price" value={shoes.price === 0? "": shoes.price}></Input>
                            <Input marginX={"20px"} name="img" type="text" onChange={inputHandler} w="480px" h="40px"pl="15px" border="1px solid lightgrey" placeholder="Product Image URL" value={shoes.img === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc7g5DWDOAp7pqzkLV6tSclMjZz8NSN7S9a2GzQnN5AVbDn8ohRBWV2CjnkyJSjk6tS4&usqp=CAU"? "" : shoes.img }></Input>
                            {alert?
                            
                            <Alert status='error' color={"black"} bgColor="#FED7D7" alignItems='center' zIndex={2} marginX="20px"
                            justifyContent='center'
                            textAlign='center' w={"480px"} h="40px">
                            <AlertIcon boxSize={5} color="red" />
                            Please fill product data!!
                            </Alert>
                           
                            :
                            null}
                            <Flex justifyContent={"center"}>
                            
                            <Button marginX={"20px"}  w="200px" bgColor={"#003334"} h="50px"color="white" onClick={addShoes}> Submit </Button>
                            <Button marginX={"20px"}  w="200px" bgColor={"#003334"} h="50px"color="white" onClick={()=>{navigate("/")}}> Cancel </Button>

                            </Flex>
                        </Grid>
                    </Grid>
              </Grid>
            </Flex>
        </Center>

    )
}
export default AddProduct;