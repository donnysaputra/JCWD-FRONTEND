import { Center, Flex, Icon,Text } from "@chakra-ui/react";
import { BiError } from "react-icons/bi"


export default function ErrorPage() {
    return (<>
    <Center minH={"100vh"}  bgColor="orange" >
        <Icon as={BiError} boxSize="sm"  />
        <Flex flexDir="column" >
        <Text fontSize={"5xl"} fontWeight="bold">ERROR 404</Text>
        <Text fontSize={"2xl"} fontWeight="bold" >Page Not Found</Text>
        </Flex>
    </Center>
       
    </>)
}