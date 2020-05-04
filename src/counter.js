import React, { useState } from 'react';
function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count1, x] = useState(1);

  console.log(`Example -> count`, count1)
  

  return (
    <div>
      <p>You clicked {count1} times</p>
      <button onClick={() => x(count1 + 1)}>
        Click me
      </button>
    </div>
  );
}
export default  Example