import { Box, Flex ,GridItem,Grid, Center,Image} from "@chakra-ui/react"


function Profile() {

    return(
        <>
        <Flex justifyContent={"right"} > 
              <Box  w={"321.67px"} h={"352.95"} >
                <Flex justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                    <Center><Box h={"168px"} w={"168px"} display={"flex"}  marginY={"92.5px"}>
                        <Image src={"https://pbs.twimg.com/media/D-IpDTTXYAE-kmQ?format=jpg&name=4096x4096"}
                                w={"150px"}
                                h={"150px"}
                                borderRadius={"full"}
                        ></Image>
                        </Box></Center>
                </Flex>
              </Box>
              <Box  bgColor={"green"} w={"50%"} h={"352.95"}>
                <Flex direction={"column"}>
                    <Box bgColor={"white"} w={"613.33px"} h={"48px"} display={"flex"}>
                        <Flex direction={"rows"}>
                             <Box  w={"205.77px"}  display={"flex"}>Champions Leagueasdasfasa</Box>
                             <Box  w={"47.98px"}  display={"flex"}>verified</Box>
                             <Box  w={"239.56px"}  display={"flex"}>but_follasasdasdasdadadasdasdasd</Box>
                             <Box  w={"48px"}  display={"flex"}>...</Box>
                        </Flex>
                    </Box>
                    <Box bgColor={"black"} w={"613.33px"} h={"48px"} display={"flex"}>
                    <Flex direction={"row"}>
                             <Box  w={"161.25px"}  display={"flex"}>Post</Box>
                             <Box  w={"241.43px"}  display={"flex"}>Follower</Box>
                             <Box  w={"47.98px"}  display={"flex"}>Following</Box>
                        </Flex>
                    </Box>
                    <Box bgColor={"red"} w={"613.33px"} h={"121.98px"} display={"flex"}>
                        <Flex direction={"column"}>
                            <Box h={"22px"} >Nama</Box>
                            <Box h={"48px"} >Bio</Box>
                            <Box  h={"24px"} >Web</Box>
                            <Box  h={"16px"} >Mutual</Box>
                        </Flex>
                    </Box>
                </Flex>
              </Box>
             </Flex>

        <Flex justifyContent={"end"}>
        <Box w={"935px"} h={"130px"} bgColor={"red"} paddingLeft={"24px"}>
            <Flex>
                <Box w={"125px"} h={"130px"}>
                    <Flex>
                       <Image src={"https://e3.365dm.com/22/12/768x432/skynews-lionel-messi-argentina_5991764.jpg?20221209205530"} w={"87px"} h={"87px"} 
                       marginY={"21.5"} borderRadius={"full"} marginX={"19px"}></Image>
                    </Flex> 
                </Box>
                <Box w={"125px"} h={"130px"}>
                <Flex>
                       <Image src={"https://images.wsj.net/im-682573/?width=1278&size=1"} w={"87px"} h={"87px"} 
                       marginY={"21.5"} borderRadius={"full"} marginX={"19px"}></Image>
                    </Flex> 
                </Box>
                <Box w={"125px"} h={"130px"}>
                <Flex>
                       <Image src={"https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg"} w={"87px"} h={"87px"} 
                       marginY={"21.5"} borderRadius={"full"} marginX={"19px"}></Image>
                    </Flex> 
                </Box>
                <Box w={"125px"} h={"130px"}>
                <Flex>
                       <Image src={"https://e3.365dm.com/22/12/768x432/skynews-lionel-messi-argentina_5991764.jpg?20221209205530"} w={"87px"} h={"87px"} 
                       marginY={"21.5"} borderRadius={"full"} marginX={"19px"}></Image>
                    </Flex> 
                </Box>
                <Box w={"125px"} h={"130px"}>
                <Flex>
                       <Image src={"https://e3.365dm.com/22/12/768x432/skynews-lionel-messi-argentina_5991764.jpg?20221209205530"} w={"87px"} h={"87px"} 
                       marginY={"21.5"} borderRadius={"full"} marginX={"19px"}></Image>
                    </Flex> 
                </Box>
            </Flex>
        </Box>
        </Flex>
         
         <Box >
            <Flex wrap={"wrap"} justifyContent={"end"} w={"935px"} gap={"24px"}>
                <Box w={"293px"} h={"293px"} bgColor={"red"}></Box>
                <Box w={"293px"} h={"293px"} bgColor={"black"}></Box>
                <Box w={"293px"} h={"293px"} bgColor={"yellow"}></Box>
                <Box w={"293px"} h={"293px"} bgColor={"yellow"}></Box>
                <Box w={"293px"} h={"293px"} bgColor={"yellow"}></Box>
                <Box w={"293px"} h={"293px"} bgColor={"yellow"}></Box>
            </Flex>
         </Box>
            
      
        </>

    )
}
export default Profile;