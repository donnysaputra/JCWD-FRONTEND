function InputComponent(){
    return(

        <div>
            <div id="container1">
                <div id="container-content">

                    <div id="container-search">
                    <div id="search">Search <input type="text" /></div>  
                    </div>

                    <div id="content">
                        <div className="isicontent">
                            <div>Semangka</div>
                            <div><img src="https://www.freepik.com/free-vector/red-apple-isolated-white-background_22732132.htm#query=apple&position=2&from_view=search&track=sph" ></img></div>
                            <div>Harga : 10000</div>
                        </div>

                        <div className="isicontent">
                            <div>Semangka</div>
                            <div>Url : www.buah.com</div>
                            <div>20000</div>
                        </div>

                        <div className="isicontent">
                            <div>Nama : Semangka</div>
                            <div>Url : www.buah.com</div>
                            <div>Harga : 25000</div>
                        </div>

                        <div className="isicontent">
                            <div>Nama : Semangka</div>
                            <div>Url : www.buah.com</div>
                            <div>Harga : 10000</div>
                        </div>

                        <div className="isicontent">
                            <div>Nama : Semangka</div>
                            <div>Url : www.buah.com</div>
                            <div>Harga :20000</div>
                        </div>

                        <div className="isicontent">
                            <div>Nama : Semangka</div>
                            <div>Url : www.buah.com</div>
                            <div>Harga : 25000</div>
                        </div>

                     </div> 

                </div>


                <div id="container-input">
                    <div id="title" className="input"> INPUT</div>
                    <div><input id="nama"  className = "input" type={"text"} placeholder={"Nama Buah"}></input></div>
                    <div><input id="url"  className =  "input" type={"text"} placeholder={"www.imgbuah.com"}></input></div>
                    <div><input id="price" className =  "input" type={"number"}></input></div>
                    <div id="button"><button>ADD BUAH</button></div>
                </div>

            </div>



        </div>
    )
}
export default InputComponent;