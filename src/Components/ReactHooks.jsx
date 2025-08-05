import React, { useState } from 'react'

const ReactHooks = () => {
 const[show,setshow]=useState(true);

const showHandle=()=>{

    setshow(true)
}

const HideHandle=()=>{

    setshow(false)
}

  return (
    <div>
      <h1>My name will display</h1>
      {show?<h1>Karpagam</h1>:null}


      <button onClick={showHandle}>Show my name</button>
      <button onClick={HideHandle}>Hide my name</button>
    </div>
  )
}

export default ReactHooks

