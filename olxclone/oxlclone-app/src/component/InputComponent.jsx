import axios from "axios";
import { useState } from "react";
import NavBar from "./NavBar";

function InputComponent(){

const [products,setProducts] = useState([])
const [product,setProduct] = useState({
    id:0,
    img_url:"",
    price:"",
    title:"",
    desc:""
})

function fetchProducts(){
    axios.get("http://localhost:2000/products/").then((res =>{
        setProducts([...res.data])
    }))
}

function inputHandler(event){
    const{value,name} = event.target;


    setProduct({
        ...product,
        [name]:value
    } )

}

function addProduct(){
    // if(!product.id || !product.img_url || !product.price || !product.title ||!product.desc) return alert("Mohon isi data anda")
    // else if(product.find((val) => val.id === product.id)) {
    //     return axios.patch("http://localhost:2000/products/"+product.id,product).then(() =>{
    //         fetchProducts()
    // })
    // }
    return  axios.post("http://localhost:2000/products", product ).then(() => {
        
        alert("new product added")
  
    })  
}
return(

    <div id="container-input">
        <div id="pemisah">
        <label id="judul">Silahkan Isi Produk Anda!</label>
        <label id="x" >X</label>
        </div>
        <div><input name="title" className="text-input" type={"text"} placeholder="Title" onChange={inputHandler} value={product.title}/></div>
        <div><input name="img_url" className="text-input" type={"text"} placeholder="Image Url" onChange={inputHandler} value={product.img_url}/></div>
        <div><input name="price" className="text-input"  type={"text"} placeholder="Price" onChange={inputHandler} value={product.price}/></div>
        <div><textarea name="desc" id="desc-input" placeholder="Description" onChange={inputHandler} value={product.desc}></textarea></div>
        <div><button id="btn-input" onClick={addProduct}>Simpan</button></div>
    </div>
)
}
export default InputComponent;