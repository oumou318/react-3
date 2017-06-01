import React, {Component } from 'react';


class One2 extends Component {
	render(){
		console.log('here one2', this.props)
		return(
			<div>

				<div>{this.props.oneQNA.question}</div>
			</div>
			)
		console.log('yoooo')
	}
}

export default One2;