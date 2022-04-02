import {useEffect, useState} from "react"
 



function Move(){

const [Tvdata,setTvdata]=useState("friend")
const [count,setcount]=useState(0)
const [sec,setsec]=useState(0)
useEffect(()=>{
    setcount(count+1)},[sec]
)


     return (
         <>
         <button onClick={()=>setcount(count+1)}>+</button>
         <button onClick={()=>setsec(sec+2)}>-</button>
         <h1>{count}</h1>
         <h1>{sec}</h1>
         <button onClick={()=>setTvdata("game of throne")}> 
         game of throne
            </button>

            <button onClick={()=>setTvdata("frinde")}> 
         frinde
            </button>

            <button onClick={()=>setTvdata("Hero")}> 
         Hero
            </button>

            <button onClick={()=>setTvdata(" picky blunder")}> 
         picky blunder
            </button>
            
            {Tvdata}
         
         </>
     )
}


    export default Move