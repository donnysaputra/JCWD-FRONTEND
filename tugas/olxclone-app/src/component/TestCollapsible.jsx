import { useState } from "react";

const TestCollapsible =() => {

  const [selected,setSelected] =useState(false)

  function toggle(){
     
      setSelected(!selected)
     
    
  }

  return (

    <div>
      <div id="wrap">
        <div className="acordian">
            <div className="item" onClick={toggle}>
              <div id="title-collap">
                <h2>Title</h2>
                <span>{selected === false? '-' :'+'} </span>
              </div>
              <div className={selected === false? 'content-collap':'content-collap-show'}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, totam?</p>
              </div>

            </div>

        </div>
      </div>
    </div>
  )
}
export default TestCollapsible;