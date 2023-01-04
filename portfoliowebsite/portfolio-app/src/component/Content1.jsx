import ImgMan from  '../img/man.png'


const Content1 = () => {
    return(
      
    <div id = "content-1">
    <div id="content-foto">
        <div class="foto">
            <img src={ImgMan} alt="man" />
        </div>
    </div>


    <div id="content-teks">
        <div></div>
        <div className="title">Hello ! I am John Smith</div>
        <div id="job">UX/UI Designer </div>
        <div className="desc">
            Next this not shut rethoric best had well of was on facility
            presented. Groundtem, economics a and the get title in he attention if one
            sleep a self-interest. The a be text conduct, slight probably
            L looked hitting he abused. 
        </div>
        <div className="desc">
            Frequency, so with from the point tone the it its is written
            on the client brief intermixing.</div>
        <div id="download">
            <div><button className="buttondownload">Download CV</button></div>
        </div>

    </div>

</div>

    )
}

export default Content1;
