import React, { Component } from 'react';


class Everything extends Component {
	render(){
			console.log('here', this.props)

		return(
			<div className="container">
				<div>hi</div>
				<div className="question">{this.props.quiz.question}</div>
			</div>
		)
	}
}

export default Everything;