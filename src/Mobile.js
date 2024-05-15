import './App.css';

function Mobile(props){
    return(
       <div className="box1">
Mobile id:{props.id} <br/>
Mobile Price:{props.price} <br/>
<img src={props.image}/>
       </div>
    );
}

export default Mobile;