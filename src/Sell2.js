import React ,{useState}from "react";
import './style.css';
import { useNavigate } from "react-router-dom";
import Sell from "./Sell";
function Sell2(){

    const a=[
        {
            cname:"Esign Infotech",
            img:"t1.jpg",
            st:"Online",
            state:false,
        },
        {
            cname:"Alayam and co",
            img:"t2.jpg",
            st:"Offline",
            state:false,
        },
        { cname:"Feddy Lewis",
            img:"t3.jpg",
            st:"Online",
            state:false,
        },
        { cname:"Feddy Lewis",
            img:"t3.jpg",
            st:"Online",
            state:false,
        },
        { cname:"Feddy Lewis",
        img:"t3.jpg",
        st:"Online",
        state:false,
    },
    { cname:"Feddy Lewis",
    img:"t3.jpg",
    st:"Online",
    state:false,
},
{ cname:"Feddy Lewis",
img:"t3.jpg",
st:"Online",
state:false,
},
 { cname:"Feddy Lewis",
img:"t3.jpg",
st:"Online",
state:false,
},
{ cname:"Feddy Lewis",
img:"t3.jpg",
st:"Online",
state:false,
},
    ];
    const [endresult, setEndresult] = useState(a);
const nav=useNavigate();

function handle(){
    nav("/sell3")
}

    return (
        <div>
            <Sell/>
            <div class="box79">
{
    endresult.map((x,index)=>(


            <div class="box80">  <img  class="box81"src={x.img}/> <div class="box82"> <span class="p">{x.cname}</span>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<div class="fa">
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star un "></span>
<span class="fa fa-star un"></span>
</div>
<br/>
 

            
            </div>
           
            </div>
          

          
            
     ))
    }
    </div>
    <div class="bh0"> 
    <button class="bh1"onClick={handle} > 2</button>
    <button class="bh2" > 1</button> 
            
    </div>
    </div>
        
    );
}

export default Sell2

/*
<p class="p1">
<span class="dot"></span> 
{x.st} </p>
*/