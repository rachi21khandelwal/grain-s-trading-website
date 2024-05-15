import React, { useState } from "react";
import './FlexSlider.css'
import Flip from "./Flip";
import Flipex from "./Flipex";
const FlexSlider = () => {
  const [active, setActive] = useState(0);

  const artists=[
    {
      name: "--Oil Crops",
      description: `Oil crops are rich sources of oils, proteins, minerals, vitamins, dietary fibers, and provide raw material for production of biodiesel. They are the second most important determinant of agricultural economy, next to cereals within the segment of field crops.`,      
      backgroundUrl: "sl4.jpg"
    },
    {
      name: "--Food Crops",
      description: `Food crops are subsistence crops that are meant for human consumption. They include fruits, vegetables, grains, and tubers, like potatoes. Grains, which include crops like wheat, rice, and corn, are the most popular crops in the world, with wheat as the most widely grown crop overall.`,
      backgroundUrl: "sl6.jpg"
    },
    {
      name: "--Forage crops",
      description: ` Forage crops are grasses, legumes, crucifers, and other crops that are grown and used to make hay, pasture, fodder, and silage. Forage crops and pastures are the foundation of long-term agriculture. Forage is vegetative matter, either fresh or preserved, used as animal feed.`,
      backgroundUrl: "sl5.jpg"
    }
  ];
        return (
          <>
           <Flipex/>
          
            <br/><br/><br/>
          <ul id="ul">
            
          {artists.map((artist, i) => (
            <li id="li"
              key={i}
              style={{ backgroundImage: `url(${artist.backgroundUrl})` }}
              role="button"
              className={active === i ? 'active' : ''}
              onClick={() => setActive(i)}
            >
              <h3 id="h3">{artist.name}</h3>
              <div className="section-content">
                <div className="inner">
                  <div className="bio">
                    <h2 class="h2">{artist.name}</h2>
                    <p id="p">{artist.description}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </>
      );
        };
        
        export default FlexSlider;


