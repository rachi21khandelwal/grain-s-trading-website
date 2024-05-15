
import React, { Component } from 'react';
import './GrainDataSearch.css';
import Flip2 from './Flip2';
import Footer from './Footer';
import FlexSlider from './FlexSlider';
import Flipex from './Flipex';
class GrainDataShown extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        id:'',
        hits: {id:'',name:'',grainname:'',graincat:'',price:''},
        isLoading: false,
        error: null,
      };
    }
   

     handleSubmit=(event)=> { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:4000/grainEntry/" //Our previously set up route in the backend
        fetch(postURL+this.state.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
           /* body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                id:id
            })*/
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => this.setState({ hits: data, isLoading: false }));

        event.preventDefault(); 
    }

    updateId = (event) => {
      this.setState({id: event.target.value});
      //this.props.name='DZone'  //err:props are readonly while state can change
    };

    render() {

        const { hits, isLoading, error } = this.state;
    
        if (error) {
          return <p> {error.message}</p>;
        }
    
        if (isLoading) {
          return <p>Loading ...</p>;
        }

        return(
          <>
          {/* <Flip2/>
        <br/>
        <br/>
        <br/>
        <br/><br/> */}
        
       <Flipex/>
            <div >

              < div id="search-bar1"  style={{ 
    backgroundImage: `url("w4.jpg")` }}
               > 
               
             
              <form onSubmit={this.handleSubmit}>
                <br/><br/>
                {/* <label>Search ID:</label> */}
                <input  required onChange={this.updateId} value={this.state.id} placeholder='Enter the search id' ></input>
                
                <button type="submit"> Submit</button>
            </form>
            </div>
            </div>
                <div class="output-container">
                <img class="imglogo" src="mainlogo.jpeg"/>
              <p class="output">Firm's Name: {(this.state.hits && this.state.hits.name) ? this.state.hits.name :'' }       </p>  
              <p class="output">Grain Name:  { (this.state.hits && this.state.hits.grainname) ? this.state.hits.grainname :'' }       </p>  
            <p class="output">Grain's Category: { (this.state.hits && this.state.hits.graincat) ? this.state.hits.graincat :'' }       </p>  
            <p class="output">  Price(per quintal):{ (this.state.hits && this.state.hits.price) ? this.state.hits.price :'' }       </p>  
          </div>
           <Footer/>
          </>
        );
      }
   
    
    }
   
  export default GrainDataShown;