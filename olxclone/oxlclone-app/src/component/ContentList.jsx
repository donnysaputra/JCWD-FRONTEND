import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function ContentList(){

   const [products,setProducts] = useState([]);
   
   
   function fetchProducts(){
    axios.get("http://localhost:2000/products/").then((res =>{
        setProducts([...res.data])
    }))
   }
    

   useEffect(()=>{
    fetchProducts()

     },[])
   

   
    
    return (
        products.map((val,idx) => {
            return(
                <div key={idx}>
                    
                        <div className="content" >
                            <div className="container-hightlight" ><img id = "img-content" src={val.img_url} alt=""></img>
                                <div id="hightlight">Highlight</div>
                                <div></div>
                            </div>
                            <div id="sub-content">
                                <div id="price" >{val.price}</div>
                                <div id="title">{val.title}</div>
                                <div id="desc">{val.desc}</div>
                            </div>
                        </div>
            
                </div>
               
            )
    
        })

    )
    
}
export default ContentList;