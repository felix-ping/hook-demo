import React,{useState} from 'react'

function  Example2(){
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>xxxxxx {count}</p>
      <button onClick={()=>{setCount(count + 1)}}>click here</button>
    </div>
  )
}
export default  Example2