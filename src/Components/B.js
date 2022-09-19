import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../App'
const B = () => {

    const first2 = useContext(counterContext)
  return (
    <div>
<h1>count - {first2.Count}</h1>
        <button onClick={()=>first2.Dispatch('increment')}>Increment</button>
        <button onClick={()=>first2.Dispatch('reset')}>Reset</button>
        <button onClick={()=>first2.Dispatch("decrement")}>Decrement</button>
    </div>
  )
}

export default B