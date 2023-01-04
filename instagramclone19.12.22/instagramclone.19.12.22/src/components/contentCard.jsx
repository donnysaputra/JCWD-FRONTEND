import { Avatar, Box,Text, Image, AspectRatio, Icon,Input,Button, Divider, Flex } from "@chakra-ui/react";
import { FaRegHeart, FaRegComment, FaRegPaperPlane,FaHeart } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

import { useState } from "react";
import { axiosInstance } from "../config/config";
import Comments from "./comments";

export default function ContentCard(props) {
    const [liked, setLiked] = useState(props.data.liked)
    const [totalLikes, setTotalLikes] = useState(props.data.number_of_likes)
    
    const [showComments, setShowComments] = useState(false)
    const [allComments, setAllComments] = useState([...props.data.comments])
    const [comment, setComment] = useState("")



    const [bookmarked, setBookmarked] = useState(props.data.bookmarked)

   async function likePost() {
    let tempData = {number_of_likes : totalLikes ,
    liked : !liked}
    // tempData.liked = !liked;
    !liked? tempData.number_of_likes++ : tempData.number_of_likes--;
    await axiosInstance.patch(`posts/${props.data.id}`, tempData)
    setTotalLikes(tempData.number_of_likes) 
    setLiked(!liked)

    }

   async function bookmarkPost() {
    let tempData = {
        bookmarked: !bookmarked
    }
    await axiosInstance.patch(`posts/${props.data.id}`, tempData)
    setBookmarked(!bookmarked)
    }

    async function addComment() {
    let tempData = {
        comments : allComments
    }

    let dataComment = {
        username : props?.user?.username ,
        avatar_url : props?.user?.avatar_url,
        comment
    }

    tempData.comments.push(dataComment)
    setAllComments(tempData.comments)
    
    setComment("")
    return await axiosInstance.patch("/posts/" + props.data.id, tempData)
    }

    function renderComments() {
        return (<>
        {
        allComments?.map((val,idx) => {
        return <Comments data={val} key={idx} />})
        }
        <Text fontSize={"sm"} color={"#8E8E8E"} paddingX="2" 
      onClick={()=> setShowComments(!showComments)}
      sx={{
        _hover: {
          cursor: "pointer",
        },
      }}>Hide All Comments</Text>
        </> 
        )
    }

    return ( <>
    <Box  borderWidth={"1px"}
    paddingY={2} marginY={4} 
    maxW={475}
    minW={470}
    borderRadius={10}
    >
        <Flex paddingX={2} paddingBottom={2} display={"flex"} alignItems={"center"}
        justifyContent="space-between"
        >
        <Flex gap={2} alignItems={"center"}>
        <Avatar size={"sm"} src={props.data.avatar_url}  
        sx={{
            _hover: {
              cursor: "pointer",
            },
          }} ></Avatar>
            <Text fontSize={"sm"} fontWeight={"bold"} 
             sx={{
                _hover: {
                  cursor: "pointer",
                },
              }}
            > {props.data.username} </Text>
        </Flex>
       

        <Icon as={BiDotsHorizontalRounded}  sx={{
            _hover: {
              cursor: "pointer",
            },
          }} boxSize={5} />
        </Flex>
       <AspectRatio ratio={4/5} maxH={585} >
       <Image src={props.data.image_url} />
       </AspectRatio>

       <Box paddingX="2" paddingTop="2" paddingBottom={"1"} 
       display="flex" alignItems="center" justifyContent={"space-between"}
       zIndex={"1"}
       >
        <Flex gap={3} >

        <Icon boxSize={5}
         as={liked? FaHeart :FaRegHeart}
        color={liked? "#ED4956" : null}
        sx={{
            _hover: {
              cursor: "pointer",
            },
          }}
        onClick={likePost}
        />


        <Icon
          boxSize={5}
          as={FaRegComment}
          sx={{
            _hover: {
              cursor: "pointer",
            },
          }}
          onClick={()=> setShowComments(!showComments)}
        />
        <Icon 
        as={FaRegPaperPlane}  
        boxSize={5}
        sx={{
            _hover: {
              cursor: "pointer",
            },
          }}
        />
        </Flex>
       

        <Icon 
        boxSize={5}
        sx={{
            _hover: {
              cursor: "pointer",
            },
          }}
        onClick={bookmarkPost}
        as={bookmarked? BsFillBookmarkFill : BsBookmark}  
        />
      </Box>

      <Box paddingX="2">
        <Text fontWeight="bold" fontSize={"sm"}>{totalLikes} likes</Text>
      </Box>

      <Box paddingX="2" pb={1} >
        <Text display="inline" fontSize={"sm"} fontWeight="bold" >
          {props.data.username}
        </Text>
        <Text display="inline" fontSize={"sm"}> {props.data.caption} </Text>
      </Box>

      { allComments.length && !showComments ? 
      <Text fontSize={"sm"} color={"#8E8E8E"} paddingX="2" 
      onClick={()=> setShowComments(!showComments)}
      sx={{
        _hover: {
          cursor: "pointer",
        },
      }}
      >View all {allComments.length} Comments</Text> :
      (
        showComments? (
        renderComments()
         ) : null
      )
      }

     
    

      <Divider orientation='horizontal' />
            <Box display="flex">
            <Input
            marginTop={1}
              marginBottom="2"
              marginLeft="4"
              type="text"
              placeholder="Add a Comment"
              marginRight="4"
              variant='unstyled'
              fontSize={"sm"}
              onChange={(e)=> { setComment(e.target.value) }}
              value={comment}
            />
                <Button colorScheme={"white"} color={"#0095f6"} disabled={comment? 
                null : "disabled"} onClick={addComment}>
                Post
              </Button>
          </Box>

       
    </Box>
    
    </>) 
}