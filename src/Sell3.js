import React ,{useState}from "react";
import './style.css';
import { useNavigate } from "react-router-dom";
import Sell from "./Sell";
function Sell3(){

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
        { cname:"Golden Mill",
            img:"	https://www.grainmart.in/wp-content/uploads/2021/10/new-sunrise-white-1-150x150.jpg",
            st:"Online",
            state:false,
        },
        { cname:"GRIT Sons ",
            img:"	https://www.grainmart.in/wp-content/uploads/2022/04/grit-logo-150x150.png",
            st:"Online",
            state:false,
        },
        { cname:"Patil Farms",
        img:"https://www.grainmart.in/wp-content/uploads/2022/11/Patil-Farnt-1-150x150.jpg",
        st:"Online",
        state:false,
    },
    { cname:"qazzle services ",
    img:"https://www.grainmart.in/wp-content/uploads/2022/01/qylefv-150x150.jpg",
    st:"Online",
    state:false,
},
{ cname:"SKRM Foods",
img:"	https://www.grainmart.in/wp-content/uploads/2020/04/skrm-logo-2.png",
st:"Online",
state:false,
},
 { cname:"Feddy Lewis",
img:"t3.jpg",
st:"Online",
state:false,
},
{ cname:"Rk Traders",
img:"	https://www.grainmart.in/wp-content/uploads/2020/06/images-38-150x150.jpeg",
st:"Online",
state:false,
},
    ];
    const [endresult, setEndresult] = useState(a);
    const nav=useNavigate();
    function handle(){
        nav("/sell2")
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
 

            
            </div></div>
          
          
            
     ))
    }
    </div>
    
    <div class="bh0"> 
    <button class="bh2" > 2</button>
    <button class="bh1"  onClick={handle}> 1</button> 
  </div>
    </div>
        
    );
}

export default Sell3