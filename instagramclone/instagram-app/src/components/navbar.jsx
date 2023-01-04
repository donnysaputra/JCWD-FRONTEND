import { Flex,Image, Input,Icon, Avatar } from "@chakra-ui/react"
import InstagramLogo from "../assets/Instagram_logo.svg.png"

import { AiOutlineHeart,AiOutlineCompass,AiFillHome } from "react-icons/ai";

export default function Navbar() {
    return (
         <Flex height={"60px"} width={"auto"} backgroundColor="white" justifyContent="center" color="black" alignItems={"center"} w="full" zIndex={2} position={"fixed"}>
            <Flex maxW={"960"} w="3xl" justifyContent="space-evenly" >
            <Image src={InstagramLogo} maxH={"29px"} maxW={"103px"}></Image>
        <Input px={4} placeholder="Search" borderRadius={"md"} bgColor={"#EFEFEF"} variant="unstyled" maxW={"268px"} />
        <Flex gap={4}>
            <Icon boxSize={"6"} as={AiFillHome}></Icon>
            <Icon boxSize={"6"} as={AiOutlineCompass}></Icon>
            <Icon boxSize={"6"} as={AiOutlineHeart}></Icon>
            <Avatar boxSize={"6"}></Avatar>
        </Flex>
            </Flex>
            </Flex>
      
    )
}