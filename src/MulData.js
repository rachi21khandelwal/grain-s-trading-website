import Slider from "react-slick";

import './Multi.css';

import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import React from 'react'

let slidesToShow = 4;

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
  
  const MulData = ({ data }) => {
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
       <div class="mid1">

    <div class="mid2">
        Best of <br/> Electronics
<br/> 
<button class="btnm">View all</button>
    </div>
    </div>

          <Slider {...settings}>
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    );
  };
  



  const Card = ({ item }) => {
    return (
      <div class="mid3">
        <div class="mid31">
        <img src={item.img}
        class="mid31p"
        />
        </div>
        
        <p class="mid32">
         {item.pname}
        </p>
        <p class="mid33">
          {item.pextra}
          
        </p>
        <p class="mid34">
          {item.pex}
        </p>
      </div>
    );
  };
  
export default MulData;


