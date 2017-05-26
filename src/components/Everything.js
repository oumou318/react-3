import React, { Component } from 'react';
import Qna from './QNA';


class Everything extends Component {
	render(){
		return(
			<div className="container">
				<div className="question">{this.props.quiz}</div>
			</div>
		)
	}
}

export default Everything;