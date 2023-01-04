import { Avatar, Box,Text, Image, AspectRatio, Icon,Input,Button, Divider, color } from "@chakra-ui/react";
import { useEffect,useState } from "react";
import { FaRegHeart, FaRegComment,FaHeart } from "react-icons/fa";

import { IoPaperPlaneOutline } from "react-icons/io5";
import { axiosInstance } from "../config/config";

export default function ContentCard(props) {
    


    const[comment,setComment] = useState({
      username:"kenny.s",
      avatar_url:"https://liveboldandbloom.com/wp-content/uploads/2021/09/Untitled_design_3_1.png",
      comment: " "
    })

    const id = props.data.id;
    const userName = props.data.username;
    const avatarUrl = props.data.avatar_url;
    const imageUrl = props.data.image_url;
    let numberOfLikes = props.data.number_of_likes;
    let liked = props.data.liked;
    const bookmarked = props.data.bookmarked;
    const caption = props.data.caption;
    let comments = props.data.comments;

    const [like,setLike] = useState(liked)
    
    function onClickLike(){
      setLike(!liked)
      if(liked){
        numberOfLikes+=1
      }else{
        numberOfLikes-=1
      }
      axiosInstance.patch("posts"+id,numberOfLikes)
    }
  //   function fetchPost(){
  //     axiosInstance.get("posts").then((res) => {
  //         props.setPost([...res.data])
  //     })
  // }
    

    function inputHandler(event){
      const{name,value} = event.target;
      console.log(value);
      setComment({...comment,
        [name]: value}
        )
console.log(comment);
    }

    async function addComment(){
      if (!comment.comment) return alert("Please fill the comment")
      let newPost = props.data
      newPost.comments.push(comment)
      props.setPost(newPost)

     await axiosInstance.patch("posts/" + id,props.data).then(() =>{
      //  fetchPost()
       alert("Comment Posted")
      })
    }
    return ( <>
    <Box  borderWidth={"1px"}
    paddingY={2} marginY={4} 
    maxW={475}
    minW={470}
    borderRadius={10}
    >
        <Box paddingX={3} paddingBottom={2} display={"flex"} alignItems={"center"}
        
        >
        <Avatar size={"md"} src={avatarUrl}></Avatar>
        <Box marginLeft={2}>
            <Text fontSize={"md"} fontWeight={"bold"}>{userName}</Text>
            <Text fontSize={"sm"} color={"GrayText"}>Batam</Text>
        </Box>
        </Box>
       <AspectRatio ratio={1} >
       <Image src={imageUrl} />
       </AspectRatio>

       <Box paddingX="3" paddingY="2" display="flex" alignItems="center">
        <Icon boxSize={6} onClick={onClickLike}  as={liked? FaHeart:FaRegHeart}  />
        <Icon
          marginLeft="4"
          boxSize={6}
          as={FaRegComment}
          sx={{
            _hover: {
              cursor: "pointer",
            },
          }}
        />
        <Icon as={IoPaperPlaneOutline}>
           
        </Icon>
      </Box>

      <Box paddingX="3">
        <Text fontWeight="bold">{numberOfLikes}</Text>
      </Box>

      {/* Caption */}
      <Box paddingX="3" pb={1} >
        <Text display="inline" fontWeight="bold" marginRight="1">
          {userName}
        </Text>
        <Text display="inline">{caption}</Text>
      </Box>
       {/* Comment */}
      
          {
            comments?.map((val,idx) =>{
              return(
                <Box paddingX="3" pb={1} key={idx} >
                <Text display="inline" fontWeight="bold" marginRight="1">
                  {val.username}
                </Text>
                <Text display="inline">{val.comment} </Text>
              </Box>
              )
            })
          }
     
     
     
      {/* */}
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
              name="comment"
              onChange={inputHandler}
            />
            <Button colorScheme={"white"} color={"#0095f6"} onClick={addComment}>
              Post
            </Button>
          </Box>

       
    </Box>
    
    </>) 
}