import Slider from "react-slick";

import { ArrowBackIos, ArrowForwardIos, Info } from '@material-ui/icons';
import React from 'react'
import { FaDotCircle } from "react-icons/fa";

let slidesToShow = 3;

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick, currentSlide } = props;
    return (
      <>
        {currentSlide !== 0 && (
          <span className="slick-prev" onClick={onClick}>
            <ArrowBackIos class="back" />
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
            <ArrowForwardIos  class="arrow " /*style={{ color: 'yellow', fontSize: '50px' ,marginLeft:'45px',marginTop:'40px' }} *//>
          </div>
        )}
      </>
    );
  };
  
  const Info1 = ({ Info }) => {
    const settings = {
      prevArrow: <PreviousBtn />,
      nextArrow: <NextBtn />,
      infinite: false,
      slidesToShow: slidesToShow,
      slidesToScroll: 2,
    };
    return (
      <div class="tag1">
        <div class="imgslider">

          <Slider {...settings}>
            {Info.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    );
  };
  



  const Card = ({ item }) => {
    return (

       
      <div class="mid56">
        <div class="mid57">
        <img src={item.img}
        class="mid57img"
        />
        </div>
        
        <p class="mid58"> <FaDotCircle/>
         {item.name}
        </p>
        <div class="box60" style={{ 
    backgroundImage: `url("like2.png")` }}></div>
       
       <span class="box61"> {item.dprice}</span>
    <span class="box62"> {item.price}
    </span>
      </div>
      
    );
  };
  
export default Info1;


