import React,{Component} from "react";

function Message(props){
    if(props.passinfo)
       return <h2>Passss itt</h2>;
    
    else
        return <h2>failss</h2>;
    
}
function Status(props)   
{   
   return(   
           <button onClick = {props.clickInfo}> Result </button>   
       );   
}  
function Again(props)   
{   
    return(   
           <button onClick = {props.clickInfo}>Again </button>   
       );   
}  
 
class Pass extends Component{
    constructor(props){
        super(props);
        this.handleview=this.handleview.bind(this);
        this.handle=this.handle.bind(this);
        this.state = {isLoggedIn : false}; 
    }
    handleview() {
        this.setState({ isLoggedIn:true});
        
    }
    handle(){

    this.setState({isLoggedIn:false});
    }
    render(){
        return(
        <div>
            <Message passinfo={this.state.isLoggedIn} />
            {   
                    (this.state.isLoggedIn)?(   
                    <Again clickInfo = {this.handle} />   
                    ) : (   
                    <Status clickInfo = {this.handleview} />   
                    )   
                }
        </div>
        );   
}

}
export default Pass