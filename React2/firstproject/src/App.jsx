import React from 'react'

const App = () => {
  let count = 10;
console.log(count);

  return (
    <div>
      <h1>Count is - {count}</h1>
      <button id='btn'>Increment</button>
    </div>
  )
}

export default App;

