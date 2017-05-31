import React, { Component } from 'react';


class Everything extends Component {
	render(){

			// console.log('here', this.props)

		return(
			<div className="container">
				<div>hi</div>
				<div className="question">{this.props.quiz.question}</div>
				<div>{this.props.quiz.a} </div>
				<div>{this.props.quiz.b} </div>
				<div>{this.props.quiz.c} </div>
			</div>
			)
	}
}


	// console.log(this.props.quiz)

		// return(
			
			
		// <div>
		// 		<div>{this.props.questionsNanswers}</div>
		// 		<div>{this.props.quiz}</div>

		// </div>
			

		// )
	

export default Everything;