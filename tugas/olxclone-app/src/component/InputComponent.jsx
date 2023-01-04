const InputComponent =() =>{
    return(

        <div>
            <div id="container-input">

                <div id="title-input">Form Input</div>
                <input className= "input" type={"text"} placeholder="Title Movie"></input> 
                <input className= "input" type={"text"} placeholder="Category"></input> 
                <input className= "input" type={"text"} placeholder="Image URL"></input> 
                <textarea id="textarea" placeholder="Description"></textarea> 
                <button id="submit">Submit</button>


            </div>
        </div>
    )
}
export default InputComponent;