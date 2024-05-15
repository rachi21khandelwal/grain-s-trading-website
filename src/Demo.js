function Demo(props) {
    return (
     
      <div class="design" >
             <font type="italic">
            Product Name: {props.name}
            <br/>
            Details:{props.details} <br/>
            Price :{props.price}
            <br/>
            Warrenty:{props.war}
               </font>
             

          </div>
  
    
    );
}
export default Demo;