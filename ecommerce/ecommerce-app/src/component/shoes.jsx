import { Box, Flex, Grid, GridItem,Center,Image,Text } from "@chakra-ui/react";
import AddProduct from "./addproduct";
import { useNavigate } from "react-router-dom";

function Shoes(props){
    const navigate = useNavigate() 
    function edit(){
        navigate("/addproduct", {state :{title:"Edit Product",data : props.data}})
    }
    return(
       <>
            <Box minW="400px" h="500px" boxShadow="3px 10px 15px #999498" borderRadius="5px" key={props.data.id}  onClick={edit}>
                <Grid templateRows={"3fr,1fr"} w="100%" >
                    <Image src={props.data.img}
                        w={"100%"}
                    />
                    <Box marginBottom={"10px"} marginTop={"10px"}>
                    <Text ml="20px">{props.data.name}</Text>    
                    <Text ml="20px">{props.data.brand}</Text>
                    <Text ml="20px">${props.data.price}</Text>
                    </Box>
                </Grid>
             </Box>
            

       </>
            
    )
}
export default Shoes;