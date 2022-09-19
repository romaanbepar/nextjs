import React, { useContext } from 'react'
import { counterContext } from '../App'

const A = () => {
    const first = useContext(counterContext)
  return (
    <div>
<h1>count - {first.Count}</h1>
        <button onClick={()=>first.Dispatch('increment')}>Increment</button>
        <button onClick={()=>first.Dispatch('reset')}>Reset</button>
        <button onClick={()=>first.Dispatch("decrement")}>Decrement</button>
    </div>
  )
}

export default A