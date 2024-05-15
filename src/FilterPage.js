


import React, { useState } from 'react';

import './Filter.css';
import { FaCartPlus, FaCircle, FaDotCircle, FaSearch } from "react-icons/fa";
function FilterPage() {
  // Sample product data
  const [products, setProducts] = useState([
    {
      id:1,
      img: "https://www.grainmart.in/wp-content/uploads/2022/11/Kabuli-Chana1-300x210.jpg",
      name:"Pulses",
      ename:"Chickpeas(kabuli chana)",
      price:4500,
      amount:1,
      dprice:3500,
      state:false
  },
  {
    id:2,
      img:"https://eu-images.contentstack.com/v3/assets/bltdd43779342bd9107/blt3d3c0e0a584c53e0/638f35b14a87af137c4c4ba9/Getty_20wheat_20kernels_20and_20heads_0.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
      name:" Cereals",
      ename:" Wheat",
      price:2500,
      dprice:1500,
      amount:1,
      state:false
  },
  {
    id:3,
      img:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/black-eyed-peas-pea-1296x728-header-1296x728.jpg?w=1155&h=1528",
      name:"Beans",
      ename:" Black-Eyed Peas",
      price:5500,
      dprice:5000,
      amount:1,
      state:false
  },
  {
    id:4,
      img:"https://www.eatingwell.com/thmb/ZrWNum1zxRzcydt5DNDvum1wQmQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sorghum-c2367f3fa98a40aba245ef40b04bf609.jpg",
      name:"  Cereals ",
      ename:"Healthy Preserved Sorghum",
      price:9500,
      dprice:6000,
      amount:1,
      state:false
  },
  
  {
    id:5,
      img:"https://c.ndtvimg.com/2023-07/2k660c8g_green-moong_625x300_12_July_23.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886",
      name:" Pulses",
      ename:"Moong Dal(Green Gram)",
      price:9500,
      dprice:8300,
      amount:1,
      state:false
  },
  {
    id:6,
      img:"https://5.imimg.com/data5/BL/XH/MY-49530431/masoor-dal.jpg",
      name:" Pulses ",
      ename:"Masoor Dal(Red Lentils)",
      price:8500,
      dprice:7590,
      amount:1,
      state:false
  },
  {
    id:7,
      img:"https://shop.ambikajapan.com/cdn/shop/products/14001_3_1024x1024.jpg?v=1646565224",
      name:" Pulses ",
      ename:"Chana Dal(Bengal Gram)",
      price:7300,
      dprice:6300,
      amount:1,
      state:false
  },
  {
    id:8,
      img:"https://m.media-amazon.com/images/I/51ctkpCEJqS.jpg",
      name:" Pulses",
      ename:"Urad Dal(Black Gram)",
      price:8300,
      dprice:6598,
      amount:1,
      state:false
  },
  
  {
    id:9,
      img:"https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2020/12/28183513/shutterstock_249324025-1.jpg",
      name:" Rice",
      ename:" Brown Rice",
      price:5300,
      dprice:5100,
      amount:1,
      state:false
  },
  {
    id:10,
      img:"https://m.media-amazon.com/images/I/81ZKZFDjT8L._AC_UF1000,1000_QL80_.jpg",
      name:" Rice",
      ename:" Basmati Rice",
      price:6500,
      dprice:5000,
      amount:1,
      state:false
  },
  {
    id:11,
      img:"https://5.imimg.com/data5/YF/GQ/MY-17045879/wild-rice.jpg",
      name:" Rice",
      ename:"Wild Rice",
      price:9500,
      dprice:7000,
      amount:1,
      state:false
  },
  {
    id:12,
      img:"https://5.imimg.com/data5/SELLER/Default/2023/3/HK/LF/KW/185663614/basmati-mini-mogra-rice.png",
      name:" Rice",
      ename:" Mogra Rice",
      price:7500,
      dprice:5000,
      amount:1,
      state:false
  },
  {
    id:13,
      img:"https://www.microbasket.com/wp-content/uploads/2021/10/Moongil-Rice.png",
      name:" Rice",
      ename:" Bamboo Rice",
      price:8600,
      dprice:7800,
      amount:1,
      state:false
  },
  {
    id:14,
      img:"https://www.health.com/thmb/qF5wz6TZIDZB0rR4YRiGvYpGIlA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1475232928-782306100d2a49779e25e22837d9f105.jpg",
      name:" Rice",
      ename:"  Black Rice",
      price:9500,
      dprice:8700,
      amount:1,
      state:false
  },
  {
    id:15,
      img:"https://nuttyyogi.com/cdn/shop/products/red-rice_1.jpg?v=1606373496",
      name:" Rice",
      ename:" Red Rice",
      price:8500,
      dprice:8200,
      amount:1,
      state:false
  },
  {
    id:16,
  img:"https://www.marthastewart.com/thmb/mn20v4pinKUFHDGc9Qhua30CoQA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2023-year-of-millet-getty-0423-d023bf36fec148bbb1503b79f1e2c8de.jpg",
      name:" Cereals",
      ename:" Millet",
      price:2500,
      dprice:1500,
      amount:1,
      state:false
  },
  {
    id:17,
      img:"https://5.imimg.com/data5/SELLER/Default/2022/4/XK/LP/FC/150544700/organic-maize-grain.jpg",
      name:" Cereals",
      ename:"Maize",
      price:2500,
      dprice:1500,
      amount:1,
      state:false
  },
  {
    id:18,
      img:"https://cdn-prod.medicalnewstoday.com/content/images/articles/295/295268/barley-grains-in-a-wooden-bowl.jpg",
      name:" Cereals",
      ename:" Barley",
      price:2010,
      dprice:1780,
      amount:1,
      state:false
  },
  {
    id:19,
      img:"https://5.imimg.com/data5/SELLER/Default/2023/8/337273831/FE/RF/KW/105758488/rye-seed-500x500.jpg",
      name:" Cereals",
      ename:" Rye",
      price:50000,
      dprice:45000,
      amount:1,
      state:false
  },
  {
    id:20,
      img:"https://www.stylecraze.com/wp-content/uploads/2014/01/The-Top-8-Benefits-Of-Kidney-Beans-Nutrition-Facts.jpg",
      name:" Beans",
      ename:" Kidney Beans",
      price:8050,
      dprice:7500,
      amount:1,
      state:false
  },
  {
    id:21,
      img:"https://www.greendna.in/cdn/shop/products/soybean-seeds_758x.jpg?v=1657698830",
      name:" Beans",
      ename:" Soyabeans",
      price:4740,
      dprice:3500,
      amount:1,
      state:false
  },
  {
    id:22,
      img:"https://healthymaster.in/cdn/shop/articles/Untitled_design_-_2023-06-17T151010.336.png?v=1686994843",
      name:"Oil Seeds",
      ename:"Peanuts",
      price:6449,
      dprice:5874,
      amount:1,
      state:false
  },
  {
    id:23,
      img:"https://img.freepik.com/premium-photo/rapeseed-plant-with-yellow-flowers-seeds-mustard-plant-yellow-blossom-canola-seeds-fresh-canola-flowers-isolated-white-background-canola-flower-canola-isolated-white_693630-15527.jpg",
      name:"Oil Seeds",
      ename:"Rapeseed",
      price:5450,
      dprice:4750,
      amount:1,
      state:false
  },
  {
    id:24,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-M7QV8j5Dx7EfJB_OzeqFIRzIIleOJ8G04Q&usqp=CAU",
      name:"Oil Seeds",
      ename:"  Sarso(Mustard)",
      price:4875,
      dprice:4620,
      amount:1,
      state:false
  },
    // Add more products as needed
  ]);
  
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filtering products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div >
   <div class="container">
      <input
       
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        id="search-box-filter"
      /><FaSearch  class="f21"/>
      </div>
      <div >
        {filteredProducts.map(product =>(
          <div key={product.id} id="box56">
            <div class="box57"> <img src={product.img} class="box57img"/></div><br/>

            <span class="box58"> <FaDotCircle/> {product.name}</span><br/><br/>
    <span class="box59i"> { product.ename}</span><br/><br/>
   <div class="box60" style={{ 
    backgroundImage: `url("like2.png")` }}></div>
    
    <span class="box61"> {product.price} INR
    </span>
    <span class="box62"> {product.dprice}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterPage;


