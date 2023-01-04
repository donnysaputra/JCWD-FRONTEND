const Contentteks = ()=>{
    return(

        
    <div id="band-content">
    <div >
    </div>

    <div id="band-header" >
        The Band
    </div>

    <div id="band-subheader" >
        We love music
     </div>
     <div id="band-content-text" >
        We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     </div>


     <div id="img-band" >
            <ReFoto/>
         </div>

</div>

    )
}

function ReFoto (){
    let arr =[]

    for (let i = 0; i < 3; i++) {
        arr.push(
            <div id="member">
            <p>
                Name
            </p>  
            <img className="imgcontent"/> 
            </div>
        )
    }

    return arr;
}

export default Contentteks;