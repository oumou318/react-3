import React, { Component } from 'react';
import axios from 'axios'
import Everything from './Everything'
class Qna extends Component{
	constructor(props){
		super();
		this.state = {
			quiz: []
		}
	}
	componentDidMount(){
		axios.get("https://mighty-shelf-36224.herokuapp.com/")
		.then((res) => {
			this.setState({
				quiz: res.data
			}, () => {
				console.log(this.state);
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

