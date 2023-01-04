import { Avatar, Box, Flex,Text } from "@chakra-ui/react";

export default function SideBar(props) {
return (<>
<Flex
 paddingY={10} marginY={4} 
 maxW={319}
 minW={300}
 flexDir="column"
 gap={4}
>

<Flex  
   
    justifyContent="space-between"
    >
        <Flex gap={5}>
        <Avatar size={"md"} src={props?.user?.avatar_url}></Avatar>
        <Flex flexDir={"column"}>
        <Text fontWeight={"bold"} fontSize="sm"> {props?.user?.username} </Text>
        <Text fontSize="sm"  color={"#8E8E8E"}> {props?.user?.name} </Text>

        </Flex> 
        </Flex>

        <Flex wrap={"wrap"} alignContent="center">
        <Text color={"#0095F6"} fontSize="12px">Switch</Text>
        </Flex>
</Flex>

    <Flex justifyContent={"space-between"} pt="2">
    <Text fontWeight={"semibold"} color="#8E8E8E" fontSize={"sm"}>Suggestion For You</Text>
    <Text fontSize={"sm"}>See All</Text>
    </Flex>


    <Flex justifyContent="space-between">
        <Flex gap={3}>
        <Avatar size={"sm"} src="https://preview.redd.it/pwtbfq4e4c5a1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=fd470aab18d91b5798c799a4c05404d742a4a12d"></Avatar>
        <Flex flexDir={"column"}>
        <Text fontWeight={"bold"} fontSize="sm"> albert.a </Text>
        <Text fontSize="sm"  color={"#8E8E8E"}> Followed by mr.beast + 2 more </Text>

        </Flex> 
        </Flex>
        <Flex wrap={"wrap"} alignContent="center">
        <Text color={"#0095F6"} fontSize="12px">Follow</Text>
        </Flex>
    </Flex>

    <Flex justifyContent="space-between">
        <Flex gap={3}>
        <Avatar size={"sm"} src="https://preview.redd.it/pwtbfq4e4c5a1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=fd470aab18d91b5798c799a4c05404d742a4a12d"></Avatar>
        <Flex flexDir={"column"}>
        <Text fontWeight={"bold"} fontSize="sm"> albert.a </Text>
        <Text fontSize="sm"  color={"#8E8E8E"}> Followed by mr.beast + 2 more </Text>

        </Flex> 
        </Flex>
        <Flex wrap={"wrap"} alignContent="center">
        <Text color={"#0095F6"} fontSize="12px">Follow</Text>
        </Flex>
    </Flex>
    <Flex justifyContent="space-between">
        <Flex gap={3}>
        <Avatar size={"sm"} src="https://preview.redd.it/pwtbfq4e4c5a1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=fd470aab18d91b5798c799a4c05404d742a4a12d"></Avatar>
        <Flex flexDir={"column"}>
        <Text fontWeight={"bold"} fontSize="sm"> albert.a </Text>
        <Text fontSize="sm"  color={"#8E8E8E"}> Followed by mr.beast + 2 more </Text>

        </Flex> 
        </Flex>
        <Flex wrap={"wrap"} alignContent="center">
        <Text color={"#0095F6"} fontSize="12px">Follow</Text>
        </Flex>
    </Flex>
    <Flex justifyContent="space-between">
        <Flex gap={3}>
        <Avatar size={"sm"} src="https://preview.redd.it/pwtbfq4e4c5a1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=fd470aab18d91b5798c799a4c05404d742a4a12d"></Avatar>
        <Flex flexDir={"column"}>
        <Text fontWeight={"bold"} fontSize="sm"> albert.a </Text>
        <Text fontSize="sm"  color={"#8E8E8E"}> Followed by mr.beast + 2 more </Text>

        </Flex> 
        </Flex>
        <Flex wrap={"wrap"} alignContent="center">
        <Text color={"#0095F6"} fontSize="12px">Follow</Text>
        </Flex>
    </Flex>


    <Text pt={4} fontWeight={"thin"} color="#C7C7C7" fontSize={"12px"} >
    © 2022 INSTAGRAM FROM META

    </Text>

    </Flex>

</>)
}