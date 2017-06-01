import React, { Component } from 'react';
import axios from 'axios'
import One2 from './One2'

class One extends Component{
	constructor(props){
		super(props);
		this.state = {
			oneQNA: []
		}
		//BIND THE METHODS
		this.one = this.one.bind(this)
	}
	one(id){
		
		axios.get("https://afternoon-journey-45420.herokuapp.com/:id" + id)

		.then((res) => {
			// console.log(res)

			this.setState({
				oneQNA: res.data

			})
		})
	}
	renderOne(){
		return(
			this.state.oneQNA.map((i,j) =>{
				return(
					<One2 
						key={j}
						id={j+1}
						oneQNA={i}
					/>
				)
			})
			)
	}
	render(){
		console.log('one question')
		return(
			<div>{this.renderOne}</div>
			)
	}
}




export default One;




