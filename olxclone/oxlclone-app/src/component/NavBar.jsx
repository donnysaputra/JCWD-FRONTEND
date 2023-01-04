import ImgLogo from './logo-olx.png';
import Jual from  './jual.png'
import SearchIcon from './search-icon.png'
import ImgBG from   './img-bg.jpg'
import ContentList from './ContentList';
function NavBar() {
   return(
   <div>
        <div id="container-navbar">
            <div><img id='logo' src={ImgLogo}></img> </div>
            <div><select id="option" placeholder='Indonesia'>
                <option>Indonesia</option>
                <option>Batam</option>
                <option>Padang</option>
                <option>Pekanbaru</option>
                <option>Jakarta</option>
                </select></div>
           
               <div className='text-search'> <input id ="text-search" type={"text"} placeholder="Temukan Mobil,Handphone,dan lainnya..."></input></div>
                <div id='icon-search'><img className= 'icon-search'src={SearchIcon} alt=''></img></div>
            
            <div id="login">Login/Daftar</div>
            <div><img id="jual" src={Jual}></img></div>
        </div>
        <div id='hr'></div>

        <div id='container-navbar2'>
            <div id='cat'>SEMUA KATEGORI</div>
            <div id='navbar'>
                <div className='isi'>Mobil Bekas</div>
                <div className='isi'>Motor Bekas</div>
                <div className='isi'>Properti</div>
                <div className='isi'>Handphone</div>
                <div className='isi'>Jasa & Lowongan Kerja</div>
                <div className='isi'>TV & Audio,Video</div>
            </div>

        </div>
        <img id='img-bg' src={ImgBG} alt=''></img>
      
    </div>
    
   )
}
export default NavBar;
