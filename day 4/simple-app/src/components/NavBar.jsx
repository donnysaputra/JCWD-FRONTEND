const NavBar = () => {
return(
    <div id="navbar">
    <div style={{display:"flex"}}>
        <div>
            HOME
         </div>
         <div>
             BAND
         </div>
         <div>
            TOUR
         </div>
         <div>
            CONTACT
         </div>
         <div >
            MORE 
            <i className="fa fa-caret-down" style={{color: "white"}}> </i>
        </div>
    </div>

    <div id="search">
            <i className="fa fa-search"></i>
    </div>
</div>

)
} 

export default NavBar;