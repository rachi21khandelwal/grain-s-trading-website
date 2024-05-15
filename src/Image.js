import './style.css'
/*   <Image name="gyanav" image="aa.jpg" />
<Image name="rachi" image="aa.jpg" />
<Image  image="aa.jpg" />
<Image  image="aa.jpg" />
<Image  image="aa.jpg" />
<Image  image="aa.jpg" /><br/>
<fieldset>
*/
function Image(props){
     return(
<div >

<img src={props.image} className="imag1"/>



</div>

     );
}


export default Image



//Upload (APP.js)
const config = {
     headers: {
       'content-type': 'multipart/form-data',
     },
   };
   axios.post(url, formData, config).then((response) => {
     console.log(response.data);
   });