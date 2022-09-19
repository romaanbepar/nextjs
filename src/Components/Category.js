// import React,{useState,useEffect} from 'react'
// import "../Components/Category.css"
// import axios from "axios"



import React,{useContext } from "react"
import { gitHub } from "../App"
import { useAuth0 } from "@auth0/auth0-react";

const Category = () => {
    const first = useContext(gitHub)
    const { loginWithRedirect,logout,isAuthenticated } = useAuth0();

// const [user,setUser]=useState([]);

// useEffect(()=>{
//     fetchData()
// },[])

// const fetchData = async()=>{
//     const response= await axios.get("https://api.github.com/users")

//     console.log(response.data);
//     setUser(response.data)
// }

  return (
    <>{
      isAuthenticated?<button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>:    <button onClick={() => loginWithRedirect()}>Log In</button>

    }
    <div className="container">

    
      {
        first.user.map((value)=>{
            return <div className="Wrapper" key={value.node_id}>
                   <img src={value.avatar_url} alt="" />
                   {/* <p>{value.login}</p> */}
                   </div>
        })
      }  
        </div></>
  )
}

export default Category