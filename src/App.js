
import React, { useReducer,useState,useEffect } from 'react';
import './App.css';
// import A from './Components/A';
// import B from './Components/B';
import C from './Components/C';
import Category from './Components/Category';
import Next from './Components/Next';
import Reducer from './Components/Reducer';
import ReducerTwo from './Components/ReducerTwo';
// import React,{useState,useEffect} from 'react'
import "./Components/Category.css"
import axios from "axios"
import Motion from './Components/Motion';


export const gitHub=React.createContext()

// export const counterContext=React.createContext()

// const initialState=0;

//     const reducer=(state,action)=>{
//        switch(action){
//         case 'increment':
//             return  state+1

//             case "decrement":
//                 return state-1
//                 case "reset":
//                     return initialState

//                     default:
//                         return state
//        } 
//     }

function App() {
// const [count,dispatch]=useReducer(reducer,initialState)

const [user,setUser]=useState([]);

useEffect(()=>{
    fetchData()
},[])

const fetchData = async()=>{
    const response= await axios.get("https://api.github.com/users")

    console.log(response.data);
    setUser(response.data)
}
  
  return (
    <>
    <gitHub.Provider value={{user:user,setUser:setUser}}>
    <Category/>
    <C/>
    <Motion/>
    </gitHub.Provider>
    <Next/>
    {/* <Reducer/> */}
    {/* <ReducerTwo/> */}
    {/* <counterContext.Provider value={{Count:count,Dispatch:dispatch}}>
    <A/>
    <B/>
    
    </counterContext.Provider> */}

    </>
  );
}

export default App;
