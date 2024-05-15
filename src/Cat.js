import React from 'react'
import ReactDom from 'react-dom'


class Cat extends React.Component
{
     render()
     {
        return<h2>Name:{this.props.name} detail:{this.props.details} Price:{this.props.price} warrenty:{this.props.war}</h2>;
     }
}
export default Cat