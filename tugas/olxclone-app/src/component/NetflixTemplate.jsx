import ImgLogo from '../img/logo.png'
import ImgSlider from './ImgSlider';
import ContentComponent from './ContentComponent';
import InputComponent from './InputComponent';
import { useState } from 'react';

const NetflixTemplate = () => {

    const [select,setSelect] = useState(false)

    function pencet (){
        setSelect(!select)
    }
    return(
        <div>
            <div id="header">
                <div style={{textAlign:"center"}} ><img  id="logo" src={ImgLogo} ></img></div>
                
            </div>

            <ImgSlider/>
            
            <div id="title-wrap">
                <div id="title">Find Movies TV shows and more</div>
             </div>

                <div id="container-search">
                    <div id='title-input'>Tambahkan Movie Terbaru</div>
                    <div id ='search'>
                        <div><input id = "text-search" type={"text"} placeholder="Search" ></input></div>
                        <div><input id= "submit-search" type={"submit"} value="Add Film" onClick={pencet}></input></div>
                        {/* <div><button id='submit-search' onClick={pencet}>Add Film</button></div> */}
                    </div>
                </div>


            {select === false? <ContentComponent/> : <InputComponent/>}


           
        </div>

        
    )
}

export default NetflixTemplate;