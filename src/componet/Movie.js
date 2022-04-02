import React  from "react";
import {useState,useEffect} from "react";
import {Card,Button} from "react-bootstrap"
 function Carde ({el}){
   useEffect(()=>{
     console.log("one show")
return ()=>{
  console.log("hide one")
}
   },[])

   
     return (
         <>
           <Card style={{ width: '18rem' }}>
  <Card.Img  className="imm"  variant="top" src={el.img} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
      {el.rate}
    </Card.Text>
    <Button variant="primary">{el.lien}</Button>
  </Card.Body>
</Card>


         </>
     )
 }
 export default Carde