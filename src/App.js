
import { useState } from 'react';
import './App.css';
import Movieee from "./componet/MovieList"
import Navv from "./componet/Nav"
import Move from './Drive';



function App() {
  const [show,setshow]=useState(false)
  const [film,setfilm]=useState(false)

  return (
    <div className="App">
      <Navv/>
      {film && <Movieee/>}
     
      <button onClick={()=>setfilm(true)}>show me best film </button>
      <button onClick={()=>setfilm(false)}>hide me best film </button>
      <button onClick={()=>setshow(false)}>hide</button>
      <button onClick={()=>setshow(true)}>show</button>
      
      {show && <Move/>}
      
    </div>
  );
}

export default App;
