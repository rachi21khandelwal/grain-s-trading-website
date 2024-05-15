import Slider from "react-slick";
import "./Style.css"
import React from 'react'

const ImageSlider = ({images}) => {

const settings = {
	infinite: true,
	dots: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
    autoplaySpeed: 2000,
    className: "center",
    centerMode: true,
     centerPadding: "60px",
     pauseOnHover: true,
};
return (
	<>
	<div className="art" >
	<h1 style={{fontSize:'55px',color:'antiquewhite'}}>Artists On Board</h1>
		<Slider {...settings}className="artist1">
		{images.map((item) => (
			<div >
			<img src={item.src} alt={item.alt} />
			<div className="artist1">{item.name}</div>
			</div>
		))}
		</Slider>
	</div>
		</>
)
}
export default ImageSlider;
