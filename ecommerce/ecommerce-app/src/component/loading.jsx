import { Center, Spinner } from "@chakra-ui/react";

function Loading() {
    return( 
        <Center>
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            boxSize={70}
            marginY={"19%"}
        ></Spinner>
        </Center>
    )
}
export default Loading;