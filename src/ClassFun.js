import React from 'react';


class ClassFun extends React.Component {
  constructor(props) {
    	super(props);
    	this.state = {
			    //  name: 'rachi',
				//  surname:'khandelwal',
                 // age:19,
				 // subject:'pcm',
				 // school:'TPs',
			num1:0,
			num2:0,
			num3:0,
			total:0,
			avg:0,
			percentage:0
		
			     };
				
				 this.myevent=this.myevent.bind(this);    
	}
changeschool=(e)=>{
	e.preventDefault();
	this.setState({school:'skit'});
};
	changeName = (e) => {
    this.setState({name : e.target.value});

  	};
changesurname=(e)=>{
	this.setState({surname: e.target.value});
};
changeage =(e)=> {
this.setState({age:e.target.value});
};
changeper=(e)=>{
	this.setState({percentage:e.target.value})
}

myevent(){
	this.setState({subject:'react'});
}
setnum1= (e)=>{
	this.setState({num1: e.target.value});
};
setnum2= (e)=>{
	this.setState({num2:e.target.value});
};
setnum3 =(e)=>
{
	this.setState({num3:e.target.value});
};
add=()=> {
	var x;
	x=parseInt(this.state.num1)+parseInt(this.state.num2)+parseInt(this.state.num3);
	this.setState({total:x});
}
avgg=()=>{
	var y;
	y=parseInt(this.state.total)/3;
	this.setState({avg:y});
}
    render() {
			    return (
			      <div class="design">
                   First name: <input type="Text" onChange={this.changeName} /><br/>
				   Surname:<input type="Text" onchange={this.changesurname}/> <br/>
                   age: <input type="Text" onChange={this.changeage} />

			        <h1>Name is  {this.state.name}</h1>
					
					<h2> Surname is: {this.state.surname}</h2>

					<h2>Add :{this.state.name}  {this.state.age}</h2>
			        <h1>age is{this.state.age}</h1>
					<h1>subject is {this.state.subject}</h1>
					
					<button onClick={this.myevent}>subject matter</button>
					<button onClick={this.myevent.bind(this)}>click subject</button>
					<h1>school:{this.state.school}</h1>
					<button type="submit" onClick={this.changeschool}>Change School</button>
					<button type="submit" onClick={(e)=>this.changeschool()}>Change it school</button>
<br/>
<br/>

					P:<input type="Text" onchange={this.setnum1}   /> <br/>
C:<input type="Text" onchange={this.setnum2}  /><br/>
M:<input type="Text" onchange={this.setnum3} /><br/>
					<button type="button" onClick={this.add}>add</button><br/>
					<button onClick={this.avgg}>Avg</button><br/>
					Total: {this.state.total}
					Avggg:{this.state.avg}

			      </div>
			    );
  	}
  }

export default ClassFun