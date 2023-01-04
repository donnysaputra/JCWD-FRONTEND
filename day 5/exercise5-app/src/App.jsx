// import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import NewComponent from './component/NewComponent';
function App() {
  const [count,setCount]= useState(5);
  const [arr,setArr]=useState([1,2,3,4])

    useEffect(()=> {
      alert("this is component DidMount")

    },[])
    
    useEffect(() =>{
      document.title = `you clicked ${count} times`
    },[count])
  return (
    
    <div>
      <p>You Clicked {count}</p>
      {
        arr.map((val,i) => {
          return <NewComponent number = {val} />
        })

      }

      <button onClick={()=> {setCount(count + 1)
      setArr([...arr,count])
      }}>
        Click Me 
      </button>
      
    
    </div>

    

  );
}

export default App;
