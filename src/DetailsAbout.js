
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Detailsabt.css'
import Artists from './Artists';
import FlexSlider from './FlexSlider';

import Flipex from './Flipex';
import Footer from './Footer';


function DetailsAbout(){
    
const[isChecked,setIsChecked]=useState(false);
   
    const a=[
        {
            product_id:1,
            pname:"BAJRA",
            About:"Bajra is a traditional Hindi name for the Pennisetum glaucum crop also known as pearl millet.",
            price:"2229.00 INR/Quintal",
            img:"bajra.jpg",
            state:false},

       {   
           product_id:2,
           pname:"BARLEY",
           
          About:"Barley is a tough cereal, grown in a number of environments where other grains can't grow – from arctic latitudes and alpine altitudes to saline desert oases.",
           price:"2036.00 INR/Quintal",
           img:"barley.jpg",
           state:false},
           {   
            product_id:2,
            pname:"MAIZE",
            price:"3600.00 INR/Quintal",
            About:"Maize (called corn in the United States, Canada, and Australia) is the most widely produced crop in the world.Maize is generally used for animal feed.",
            img:"maize.jpg",
            state:false},
            
       {   
        product_id:2,
        pname:"SOYABEAN",
        price:"3000.00 INR/Quintal",
        About:"Soybeans are legumes related to peas, clover and alfalfa. Soybeans are dicots, which means they have two cotyledons.",
        img:"soyaa.jpg",
        state:false},
       {
        product_id:2,
            pname:"TARAMIRA",
            price:"5550 / Quintal",
            About:"Taramira oil or jamba oil, is a seed oil, pressed from the seeds of the arugula (Eruca sativa). Because the plant is highly drought resistant, the oil is popular in regions of poor rainfall, particularly in West Asia.",
            img:"ta.jpg",
            state:false
       },
               
            {   
                product_id:2,
                pname:"JOWAR",
                price:"3750 / Quintal ",
                About:"Jowar or sorghum is the most commonly used millet since ancient times, a native of Africa and this cereal is widely grown in India. Jowar is a gluten-free and protein-rich millet and also good for health.",
                img:"jowar.jpg",
                state:false},
                {   
                    product_id:2,
                    pname:"WHEAT",
                    About:"Wheat is a grass widely cultivated for its seed, a cereal grain that is a worldwide staple food. The many species of wheat together make up the genus Triticum; the most widely grown is common wheat. ",
                    price:"3800.00 INR/Quintal ",
                    img:"wheat.jpg",
                    state:false},
                    {

                        
                            product_id:2,
                            pname:"RICE",
                            About:"Rice, (Oryza sativa), edible starchy cereal grain and the grass plant (family Poaceae) by which it is produced. Roughly one-half of the world population, including virtually all of East and Southeast Asia",
                            price:"2960.00 INR/Quintal",
                            img:"rice.jpg",
                            state:false},
                             

    ];
   

    
    
    
    const [endresult, setEndresult] = useState(a);
   
    function Company(index){
        setIsChecked(!isChecked);

        if(!isChecked){
            const dupcategory=a
            i=0;
            const x=[]; //[{}]
            for (var i=0; i < dupcategory.length; i++) {
                    if(dupcategory[i].price<="3000")
                    {
                        x.push(dupcategory[i])
                    }
                
            }

            setEndresult(x);
        }
        else{

            setEndresult(a);
        }

   }


    return ( 
        <div>
           
            <FlexSlider/>
                <div class="s1">Types of Grains</div>
                <div class="filter">
                <form class="pricecheck">
                Price (under 3000INR): <input type="checkbox"  class="pricecheck1" onChange={Company} value="2500" checked={isChecked}/>
                </form>

                </div>
            {
            endresult.map((x,index)=>(
                    <div class="box4">
                         <div class="box5"> 
                        
<img src={x.img} class="deimg"/>
                         </div>
                         <div class="box12">
                        

                        <h3 class="h3a" > {x.pname} </h3><br/>
                         <h6 class="h6a">{x.About} </h6>
                       <h6 class="h6a">{x.price}</h6> <br/>
                      
                    </div>
                    </div>
                   
            ))
            
         
         }
         <div class="made1">
            </div>  

<Footer/>
        </div>
    );
}
        
export default DetailsAbout;