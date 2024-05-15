import React,{useState} from "react";
import './Middle.css'
function Middle(){



    const a=[

        {

            pname:"Wheat",
            img:"https://5.imimg.com/data5/ECOM/Default/2023/3/XG/ZD/DN/71853916/image-bcbb5147-bfbb-4570-b0c9-597e63b7cb45-500x500.jpg"
        },
        {

            pname:"Ragi Seeds",
            img:"https://5.imimg.com/data5/SELLER/Default/2020/8/JY/LR/VY/22745867/ragi-seeds-500x500.jpg"
            
        },
        {

            pname:"Black Rice",
            img:"https://5.imimg.com/data5/SELLER/Default/2022/11/QJ/WN/AB/152143624/black-rice-500x500.jpg"
        },
        {

            pname:" Cereals",
            img:"https://5.imimg.com/data5/CK/FG/MY-1735846/organic-cereals-500x500.jpg"
        },
        {

            pname:"Bajra",
            img:"https://5.imimg.com/data5/SP/NW/MY-13537206/pearl-millet-500x500.jpg"
        },
        {

            pname:"Maize",
            img:"https://5.imimg.com/data5/SELLER/Default/2023/1/BU/KP/EX/45117192/organic-maize-500x500.jpg"
        },
        {

            pname:"Quinoa Seed",
            img:"https://5.imimg.com/data5/SELLER/Default/2021/3/UG/GO/JL/5929034/quinoa-seed-500x500.jpg"
        },
        {

            pname:"Red Rice",
            img:"rice.jpg"
        },
        {

            pname:"Jowar",
            img:"https://5.imimg.com/data5/NV/JE/GD/SELLER-97745743/organic-jowar-grain-500x500.jpg"
        },
        {

            pname:"Barley",
            img:"https://5.imimg.com/data5/SELLER/Default/2022/5/PQ/SM/IN/38768188/barley-10-kg-501-aeroplane--500x500.jpeg"
        },
    ]
    const [endresult, setEndresult] = useState(a);
    return(


        <>


<div class="m1">

{
    

            endresult.map((x,index)=>(
                    <div class="box">
                           <img src={x.img} class="i1" />
                         
                                <h6><span >{x.pname}</span></h6>

                               
                                
                            
                            
                    </div>
            ))
            }  

            </div>
        </>
    );

}
export default Middle;