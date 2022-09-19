import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../App'
import { gitHub } from "../App"

const C = () => {
//     const first2 = useContext(counterContext)
//   return (
//     <div>
// <h1>count - {first2.Count}</h1>
//         <button onClick={()=>first2.Dispatch('increment')}>Increment</button>
//         <button onClick={()=>first2.Dispatch('reset')}>Reset</button>
//         <button onClick={()=>first2.Dispatch("decrement")}>Decrement</button>
//     </div>
//   )

const first3=useContext(gitHub)
return(
<div className="container">
      {
        first3.user.map((value)=>{
            return <div className="Wrapper" key={value.node_id}>
                   {/* <img src={value.avatar_url} alt="" /> */}
                   <p>{value.login}</p>
                   </div>
        })
      }  
        </div>)
}

export default C