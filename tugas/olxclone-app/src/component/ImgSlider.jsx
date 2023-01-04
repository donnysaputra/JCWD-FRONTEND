const ImgSlider = () => {
   
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      console.log(slides)
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      
      slides[slideIndex-1].style.display = "block";  
      setTimeout(showSlides, 2000); 
    }
    return(
        <div>
                        
            <div class="slideshow-container">

            <div className="mySlides fade">
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/VBJXL5E6CZC4VBNNHEU73TUFDE.jpg" alt="" width="100%"/>
            
            </div>

            <div className="mySlides fade">
            <img src="https://www.nme.com/wp-content/uploads/2017/09/narcos_press_1000.jpg" alt="" width="100%"/>

            </div>

            <div className="mySlides fade">
            <img src="https://i0.wp.com/theubj.com/wp-content/uploads/2021/12/46BCAAAE-8C40-4A8B-ACAD-0A9E6FBFBE14.jpeg" alt="" width="100%"/>
            
            </div>

            </div>
        </div>

    )
 }
 export default ImgSlider;