import React, { Component } from 'react';
import Qna from './QNA';


class Everything extends Component {
	render(){
			console.log(this.props.quiz)

		return(
			
			
		<div>
				<div>{this.props.questionsNanswers}</div>
				<div>{this.props.quiz}</div>

		</div>
			
			
		)
	}
}

export default Everything;