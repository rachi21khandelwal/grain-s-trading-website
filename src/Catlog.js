import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import'./App.css';

function Catlog(){
    const[check,ischeck]=useState(false);
     const a=[
        {
            p_id:12,
            p_name:"mob1",
            price:1000,
            img:"mobile_1.jpg"
        },
        {
            p_id:123,
            p_name:"Mob2",
            price:100,
            img:"mobile_2.jpg"

        },
        {
            p_id:12311,
            p_name:"Mob3",
            price:1001,
            img:"mobile_2.jpg"

        },
      
     ];
     const[end,setend]=useState(a);
     function mob(index){
    ischeck(!check);
    if(!check){
        const dub=a
        i=0;
        const x=[];
        for(var i=0;i<dub.length;i++){
            if(dub[i].p_name=="mob1" || dub[i].price==100)
            {
                x.push(dub[i]);
            }
        }
        setend(x);


    }
    else{
        setend(a);
    }
    
     }
     
     return(
        <div >
            <form>
                mob1:<input type="checkbox" onChange={mob} value="mob1"  check={ischeck}/>

            </form>
            {
                end.map((x,index)=>(
                   <div className="box1">
                 <h2><h2><span> Product id:{x.p_id}</span><br/><br/></h2></h2>
<h2><h2><span>Model Name:{x.p_name}</span></h2></h2><br/>
<h2><span>Price:{x.price}</span></h2>
<span><img src={x.img} width="30%" height="30%"/></span>
                   </div>
                )
                )
            }
        </div>
     )
}

export default Catlog;