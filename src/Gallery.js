
import  { useRef, useState } from 'react';
import './Gallery.css';
import Middle from './Middle';
import Footer from './Footer'
function Gallery() {



   const a=[
      {
         img: "https://www.grainmart.in/wp-content/uploads/2022/11/Kabuli-Chana1-300x210.jpg",
         name:"Pulses",
         ename:"Chickpeas,kabuli chana",
         imgg:"chickfield.jpg",
         price:4500,
        
       
         state:false
     },
     {
      img: "corn.jpg",
      name:"Pulses",
      ename:"Maize",
      imgg:"cornfield.jpg",
      price:4500,
 
    
      state:false
  },
     { 
         img:"https://www.grainmart.in/wp-content/uploads/2022/06/IMG_20220601_094129_1-1-300x210.jpg",
         name:" Wheat",
         ename:" Wheat",
         price:2500,
        
         imgg:"wal1.jpg",
         state:false
     },
     {
  imgg:"ricefield.jpg",    
         img:"https://www.grainmart.in/wp-content/uploads/2022/07/Raw-Rice-300x210.png",
         name:" Non-Basmati Rices",
         ename:"Organic Raw Rice",
         price:6500,
      
         state:false
     },
     {
         img:"https://www.grainmart.in/wp-content/uploads/2022/04/sorghum-300x210.png",
         name:" Coarse Cereals ",
         ename:"Healthy Preserved Sorghum",
         imgg:"sorghumfield.jpg",
         price:9500,
         
         state:false
     },
     {
      img:"https://5.imimg.com/data5/NV/JE/GD/SELLER-97745743/organic-jowar-grain-500x500.jpg",
      name:"Jowar ",
      ename:"Cereals",
      price:9500,
      imgg:"jowarfield.jpg",
     
      state:false
  },
     {
      img:"https://5.imimg.com/data5/SP/NW/MY-13537206/pearl-millet-500x500.jpg",
      name:"Bajra ",
      ename:"Cereals",
      price:9500,
      imgg:"bajrafield.jpg",
      
      state:false
  },

  {
   img:"https://5.imimg.com/data5/SELLER/Default/2020/8/JY/LR/VY/22745867/ragi-seeds-500x500.jpg",
   imgg:"ragi.jpg",
   name:"Ragi ",
   ename:"Cereals",
   price:9500,
 
   
   state:false
},

   ]
   const [endresult, setEndresult] = useState(a);
  return(
   <>
   
 
   { endresult.map((x,index)=>
   (

  
  <div class="wrapper">
         <div class="card front-face">
           <img src={x.imgg}/>
         </div>
         <div class="card back-face">
            <img src={x.img}/>
            <div class="info">
               <div id="title">
               <h3> {x.name}</h3><br/>
                {x.ename}<br/>

                
                {x.price} INR
               </div>
               
            </div>
            
         </div>
      </div>

   ))
   }

   </>
   
  );
}
export default Gallery