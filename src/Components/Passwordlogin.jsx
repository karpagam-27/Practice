import React, { useState } from 'react'

const Count = () => {

  console.log("rendering");

const[inputtype, setinputtype]=useState("password");
const[product,setproduct]=useState([]);



const showHandle=()=>{
 setinputtype("text")

}


const HideHandle=()=>{

  setinputtype ("password")
}
 const ValueHandle=()=>{
  setproduct([])


 }
  


  return (
    <div>
    
        <input type={inputtype}/>

        <button onClick={showHandle}>Show</button>
        <button onClick={HideHandle}>Hide</button>
        <button onClick={ValueHandle}>Value not change</button>
  
    
    </div>
  )
}

export default Count
