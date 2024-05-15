
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class GetDataById extends Component {
 
 
    constructor(props) {
      super(props);
   
      this.state = {
        id:'',
        hits: {id:'',fname:'',mname:' '
      },
        isLoading: false,
      
        error: null,
      };
    }
  

     handleSubmit=(event)=> { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:4000/api/data/" //Our previously set up route in the backend
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
          return <p>{error.message}</p>;
        }
    
        if (isLoading) {
          return <p>Loading ...</p>;
        }
       
    return(
           <div>
                <div class="box17" >
    <div class="box18" style={{ 
    backgroundImage: `url("s1.jpg")` }}> </div>
    
    <div class="box18">
      <p>Search itt!!</p>
              <form onClick={this.handleSubmit}>
               <div class="box41">
              <label > User ID:</label>
               <input class="box42" required onChange={this.updateId} value={this.state.id}></input>
               <br/>
               
               <button class="btn7" >  Submit  
               </button>
                
               </div> </form>
            </div>
           
            </div>
          
           < div class="App">
                <table class="table">
            
          <tr>
<td>First Name</td>
         <td>    { (this.state.hits && this.state.hits.fname) ? this.state.hits.fname :'' }        </td>
         </tr>
         <tr>
<td>Middle  Name</td>
         <td>  
              { (this.state.hits && this.state.hits.mname) ? this.state.hits.mname :'' }  </td>   </tr>
                
  

            </table>
          </div>
          </div>
        );
      }
   
    
  }
   

  export default GetDataById;