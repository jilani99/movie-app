import React, { useState } from "react";
import img1 from "../imge/one.jpg"
import img2 from "../imge/tow.jpg"
import img3 from "../imge/thre.jpg"
import img4 from "../imge/for.jpg"
import img5 from "../imge/five.jpg"
import Carde from "../componet/Movie.js"


function Movieee(){
    
     const list =[{
         title:"Uncharted ",
         img:img1,
         lien:"link",
         rate:"6/10"
        },
        {
            title:"Last Man Down ",
            img:img2,
            lien: "dest",
            rate:"7/10"
           },
           {
            title:" Encanto",
            img:img3,
            lien:"link",
            rate:"7/10 "
           },
           {
            title:"The Walking ",
            img:img4,
            lien:"link",
            rate:"8/10 "
           },
           {
            title:"Melrose ",
            img:img5,
            lien:"link",
            rate:"7/10 "
           },
        

     ]
     return (
     <>
     <div className="film"> 
     
    {list.map((el)=><Carde el={el}/>)}
</div>
     </>

     )

}
export default Movieee