const NavBar = () => {
    return (
        <div>
        <div id="navbar">
            <div id="menu-kiri">
            <div>Niko</div>
        </div>

        <div id="menu-kanan">
            <div id="home" className="menu">Home</div>
            <div id="about" className="menu">About Me</div>
            <div id="case" className="menu">Case Study</div>
           
        </div>

        <div>
            <div id="hire-me" >Hire Me</div>
        </div>
    
    </div>
  
    <hr style={{color:"orange"}}/>
        </div>
    )
}
export default NavBar;