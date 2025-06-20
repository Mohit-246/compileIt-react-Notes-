import React, { useState } from 'react'

function FourthComponent() {
    const [count, setCount] = useState(0)

    // The above ones are called as state variables.

    //To increment count we will always use 2nd variable not count any value you want to updat always use 2nd state variable.
  return (
    <div>
         <p>{count}</p>
         <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  )
}

export default FourthComponent