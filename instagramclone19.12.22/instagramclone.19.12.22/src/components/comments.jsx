import {  Avatar, Flex,Text } from "@chakra-ui/react";

export default function Comments(props) {
    return (
        <>{
             <Flex padding={2} pb={1} gap={1} >
                <Avatar src={props.data.avatar_url} size={"xs"} />
                <Text display="inline" fontSize={"sm"} fontWeight="bold" >
                  {props.data.username}
                </Text>
                <Text display="inline" fontSize={"sm"}> {props.data.comment} </Text>
              </Flex>
                
        }
        
        
        </>
    )
}