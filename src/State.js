import React from 'react';

class State extends React.Component
{
constructor(props)
{
super(props);
this.state = {
first:"rachi",
last:"khandelwal"
}
}
render()
{
return(
    <div>
        <h3> name:{this.state.first} </h3>
       <h2> Surname:{this.state.last}</h2>
        
    </div>
    );
}

}
export default State;


