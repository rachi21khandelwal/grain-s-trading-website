import Slider from "react-slick";
import './index.css'
import React from 'react'


const ImageSlider = ({images}) => {

const settings = {
	infinite: true,
	
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: true,
	autoplay: true,
autoplaySpeed: 1300,

};
return (
	<div class="tag">
	
	<div className="imgslider">
	
		<Slider {...settings}>
			
		{images.map((item) => (
			<div key={item.id}>
			<img src={item.src} alt={item.alt} />
			</div>
		))}
		</Slider>
	</div>
		</div>
)
}
export default ImageSlider;
