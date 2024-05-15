import Flip from "./Flip";
import Footer from "./Footer";
import images from "./Images";
//npm i slick-carousel
//npm i react-slick
import ImageSlider from "./ImageSlider";
import Appinfo from './Appinfo';
import FilterPage from "./FilterPage";
import Addtocart from "./Addtocart";


const App = () => {
return (
	<div>
	<div  >
		
{/* <NavbarMain/> */}
	<ImageSlider images={images}/>
	<Flip/>

</div>

{/* <Addtocart/> */}
<FilterPage/>
<div class="made">
    
</div>
<Footer/>

</div>
)
}

export default App;
