import Slider from "react-slick";

import './Newdip.css'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import React from 'react'
import Cart from './Cart';
import {FcLikePlaceholder} from "react-icons/fc";
import { FaDotCircle } from "react-icons/fa";

let slidesToShow = 3;

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick, currentSlide } = props;
    return (
      <>
        {currentSlide !== 0 && (
          <span className="slick-prev" onClick={onClick}>
            <ArrowBackIos class="back1" />
          </span>
        )}
      </>
    );
  };



  const NextBtn = (props) => {
    const { className, onClick, slideCount, currentSlide } = props;
    // console.log(props);
    return (
      <>
        {currentSlide !== slideCount - slidesToShow && (
          <div className="slick-next" onClick={onClick}>
            <ArrowForwardIos  class="arrow1 " /*style={{ color: 'yellow', fontSize: '50px' ,marginLeft:'45px',marginTop:'40px' }} *//>
          </div>
        )}
      </>
    );
  };
  
  const Item = ({ info }) => {
    const settings = {
      prevArrow: <PreviousBtn />,
      nextArrow: <NextBtn />,
      infinite: false,
      slidesToShow: slidesToShow,
      slidesToScroll: 2,
    };
    return (
      <div id="slick-slide img">
     <div class="imgSlider">
          <Slider {...settings}>
            {info.map((item)=>(

<div class="box56">
<div class="box57"> <img src={item.img} class="box57img"/></div>
<p class="box58"> <FaDotCircle/> {item.name}</p>
<p class="box59"> { item.ename}</p>
<div class="box60" style={{ 
backgroundImage: `url("like2.png")` }}></div>
<span class="box61"> {item.dprice}</span>
<span class="box62"> {item.price}
</span>

<div>
<Cart/>
</div>
</div>
            ))}
          </Slider>
        </div>
        </div>
    );
  };
  



  
  
export default Item;



/* <button class="midbutton">Contact</button> */