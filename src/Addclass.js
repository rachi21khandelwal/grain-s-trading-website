import React from 'react'



class Addclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Num1: 0 ,
                    Num2 : 0 ,
					sum:0,
                };
	}


	setNum1 = (e) => {
    this.setState({Num1: e.target.value});
    //this.props.name='DZone'  //err:props are readonly while state can change
  };

  setNum2 = (e) => {
    this.setState({Num2: e.target.value});
    //this.props.name='DZone'  //err:props are readonly while state can change
  };

  add=()=>{
	var x;
	x=parseInt(this.state.Num1)+parseInt(this.state.Num2);
	this.setState({sum: x});
  }

    render() {
		    return (
		      <div>
		        <h1>Number Addition Example</h1>
		        
				Number 1 :<input type="Text"  onChange={this.setNum1} id="txt1"/> &nbsp;
				Number 2 : <input type="Text"  onChange={this.setNum2} id="txt2"/>
				<br/><br/>

		        <button type="button" onClick={this.add} >Addition</button>
				<br/>
				<fieldset>
		        Sum : {this.state.sum}
				</fieldset>
		      </div>
		    );
  	}
  }

export default Addclass