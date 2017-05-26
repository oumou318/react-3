import React, { Component } from 'react';
import axios from 'axios';

class Qna extends Component{
	constructor(props){
		super();
		this.state = {
			quiz: []
		}
	}
	componentDidMount(){
		axios.get("https://mighty-shelf-36224.herokuapp.com/")
		.then(function(response) => {
			this.setState({
				quiz: response.data
			})
		})
	}
	render(){
		let questionsNanswers;
		{questionsNanswers = 
			<div>
			{this.state.quiz.map((i,j) =>
				<Everything
				key={j}
				id={j+1}
				quiz={i}
				/>
				)}
			</div> 
			}
			return(
				<div>
					{questionsNanswers}
				</div>

				)
	}
	
}



export default Qna;

