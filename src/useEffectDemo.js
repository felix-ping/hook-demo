import React,{useState, useEffect} from 'react'

function  Example3(){
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>xxxxxx {count}</p>
      <button onClick={()=>{setCount(count + 1)}}>click here</button>
    </div>
  )
}
export default  Example3